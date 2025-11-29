export async function submitContact(payload){
  const url = "https://lightless-tumble.000webhostapp.com/php/app_register.php";
  const fd = new FormData();
  Object.entries(payload).forEach(([k,v]) => fd.append(k, v));
  const res = await fetch(url, { method: "POST", body: fd });
  const text = await res.text();
  return text;
}
