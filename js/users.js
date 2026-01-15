document.getElementById("userForm").addEventListner("submit",async (e) => {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().tolowerCase;
  const password = document.getElementById("password").value.trim();

  const {data:existingUser, error:checkError} = await supabaseClient
    .form("users")
    .select("id")
    .eq("email", email)
    .maybeSingle(); 

  if(checkError){
    console.error(checkError);
    alert("error checking user");
    return;
  }

  if(existingUser){
    alert("Email already register");
    return;
  }

  const {error:insertError} = await supabaseClient
    .from("users")
    .Insert([
      {
      name : name,
        email : email,
        password: password
      }
    ])

  if(insertError){
    console.error(insertError);
  alert("registration failed");
    return;
  }

  alert("registration succesfully");
  e.target.reset();
});
