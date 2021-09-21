import { authAxios } from "@/setups/axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import router from "next/router";


const DeleteAccount = () => {
  const { seller } = useSelector((state) => state.user);

  const [deleteUser, setDeleteUser] = useState("");
  console.log(seller)

  const submit =  (e) => {
    e.preventDefault()

    // const currentTime = new Date();
    // const atTheTimeAccountDeleted = currentTime.getMonth()+1
    // console.log(atTheTimeAccountDeleted)
    // console.log(currentTime)


    // if(currentTime === atTheTimeAccountDeleted){
    setTimeout(async ()=>{
      const deleteResponse = await authAxios()({
        url: `sellers/${seller.id}`,
        method: "DELETE",
      });
      const deleteShop = await authAxios()({
        url: `shops/${seller.shop.id}`,
        method: "DELETE",
      });
      console.log(deleteResponse)
      if (deleteResponse && deleteShop) {
        localStorage.removeItem("token")
        localStorage.removeItem("data")
      }
    },2592000)

      setDeleteUser("processing, your account will be deactivated within 4 weeks")
      setTimeout(()=>{
        router.push("/")
      },2000)
    
    // }




  }
  return (
    <div className="settings-block">
      <h3 className="headline-5 mb-30">Delete Account</h3>
      <div className="delete-question">
        What happens to my Account if I delete it?
      </div>
      <div className="delete-account">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
        <div
          id="w-node-c0542385-d9c9-0675-543c-203b23cb8fd4-0db831b0"
          className="button blue secondary" style={{ height: "50px" }}
          onClick={submit}
        >
          Delete my Account
        </div>
      </div>
      <br/>
      {deleteUser && <h4>{deleteUser}</h4>}
    </div>
  );
};

export default DeleteAccount;
