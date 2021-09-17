import { authAxios } from "@/setups/axios";


const DeleteAccount = () => {

  const submit = (e) =>{
    e.preventDefault()
    console.log("deleted")
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
          className="button blue secondary" style={{height:"50px"}}
          onClick={submit}
        >
          Delete my Account
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
