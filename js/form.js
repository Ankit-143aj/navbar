const supabaseClient = window.supabase.createClient(
  "https://lqoyadmxuywcgmgdigdl.supabase.co",
  "sb_publishable_litH-Xgde6TYyFXoMycjTA_az--2eXV "
);

if (supabaseClient){
  console.log("Database connected:",supabaseClient);
}
else{
  console.log("Database not created");
}
 
