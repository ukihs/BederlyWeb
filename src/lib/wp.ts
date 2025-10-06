// src/lib/wp.ts
export function toWpLangEnum(lang: "th" | "en"): "TH" | "EN" {
  return lang.toUpperCase() as "TH" | "EN";
}

export async function wpQuery<T>(query: string, variables?: Record<string, any>) {
  const endpoint = import.meta.env.PUBLIC_WP_GRAPHQL || 'https://cms.bederly.com/graphql';
  
  // ============ DEBUG: เริ่มต้น ============
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🔍 [BUILD TIME] WPGraphQL Request');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📍 Endpoint:', endpoint);
  console.log('📝 Query:', query.substring(0, 150).replace(/\s+/g, ' ') + '...');
  console.log('🎯 Variables:', JSON.stringify(variables, null, 2));
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  // ============ ตรวจสอบ Endpoint ============
  if (!endpoint) {
    console.error('❌ ERROR: PUBLIC_WP_GRAPHQL is not defined!');
    console.error('💡 TIP: Check your .env or .env.production file');
    throw new Error('GraphQL endpoint is not configured');
  }

  try {
    // ============ Fetch Data ============
    console.log('⏳ Fetching data from WordPress...\n');
    
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ query, variables })
    });

    // ============ DEBUG: Response Status ============
    console.log('📡 Response Status:', res.status, res.statusText);
    
    // ============ Handle HTTP Errors ============
    if (!res.ok) {
      const errorText = await res.text();
      console.error('\n❌ HTTP ERROR:');
      console.error('Status:', res.status, res.statusText);
      console.error('Response:', errorText.substring(0, 500));
      console.error('\n💡 POSSIBLE CAUSES:');
      console.error('  1. WPGraphQL plugin not installed on WordPress');
      console.error('  2. Wrong endpoint URL');
      console.error('  3. WordPress site is down');
      console.error('  4. CORS blocking the request');
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    // ============ Parse JSON ============
    const json = await res.json();
    
    // ============ DEBUG: Check for GraphQL Errors ============
    if (json.errors && json.errors.length > 0) {
      console.error('\n❌ GRAPHQL ERRORS:');
      json.errors.forEach((error: any, index: number) => {
        console.error(`\nError ${index + 1}:`);
        console.error('  Message:', error.message);
        console.error('  Path:', JSON.stringify(error.path));
        console.error('  Extensions:', JSON.stringify(error.extensions, null, 2));
      });
      console.error('\n💡 POSSIBLE CAUSES:');
      console.error('  1. Query syntax error');
      console.error('  2. Field does not exist in schema');
      console.error('  3. ACF fields not registered in WPGraphQL');
      console.error('  4. Wrong variable types');
      throw new Error('WPGraphQL returned errors: ' + json.errors[0]?.message);
    }

    // ============ DEBUG: Success ============
    console.log('\n✅ SUCCESS! Data received:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    
    // แสดง preview ของ data (ไม่ล้นหน้าจอ)
    const dataPreview = JSON.stringify(json.data, null, 2);
    const maxLength = 800;
    if (dataPreview.length > maxLength) {
      console.log(dataPreview.substring(0, maxLength) + '\n... (truncated)');
    } else {
      console.log(dataPreview);
    }
    
    // นับจำนวน records
    const dataKeys = Object.keys(json.data || {});
    console.log('\n📊 Data Summary:');
    dataKeys.forEach(key => {
      const value = json.data[key];
      if (Array.isArray(value)) {
        console.log(`  - ${key}: ${value.length} items`);
      } else if (value && typeof value === 'object') {
        const subKeys = Object.keys(value);
        console.log(`  - ${key}: { ${subKeys.join(', ')} }`);
      } else {
        console.log(`  - ${key}:`, value);
      }
    });
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    return json.data as T;

  } catch (error: any) {
    // ============ DEBUG: Fatal Error ============
    console.error('\n💥 FATAL ERROR:');
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    // Re-throw เพื่อให้ Astro จัดการต่อ
    throw error;
  }
}