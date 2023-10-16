import { defineStore } from "pinia";
import { ref } from "vue";
export const useLoginStore = defineStore("loginStore", () => {
  const user = ref('')
  const token = ref('')

//   ------ Methods ------
  const login = async (data) => {
    const result = await useFetch('/api/builder/ms-auth/v1/oauth/token', {
      method: "POST",
      body: {
        "grant_type": "password",
        "username": data.email,
        "password": data.password,
        "client_id": "9910d746-01aa-4c7a-a60a-dc35c18de211",
        "client_secret": "fRLrMFYhwEDy9SLiEE1GXOAGaKEfVYTKgRGK6GZD",
        "scope": "*"
      }
    })
    return result
  }
  const setTokensToCookie = async (data) => {
    setCookie(`webteam_access_token`, data.access_token, 2)
    return true
  }
  const setCookie = (name,value,days) =>{
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }

  return { login, setTokensToCookie }
});
