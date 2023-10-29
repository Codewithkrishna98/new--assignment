
const Login = () => {
 
  return (
    <>
    <div className="container">
        <h1>Login</h1>
   <form >
   
    <div>
<p>Login ID</p>
<input type='text'   placeholder='Enter Login Id'   />

   </div>
   <div>
   <p>Password</p>

   
<input type="password"  placeholder="Enter Password" />

</div>
   
   
   
   <input type="checkbox"      className="checkbox1"/>
  <label className="label1" > Remeber me</label>
  <button   className="label2">Change Password</button>
  <br></br>
  
   <input type="checkbox"   className="checkbox2"/>
  <label   className="label4"> Agree to </label>
  <label   className="label3"   > Terms & Condition</label>
  
   </form>
   <button className="login">Login</button>
  
   <span className="footer" >
    <p>Don&#39;t have an account?</p>
    <p className="here" >Register Here</p>
   </span>
   
  
    </div>
    
    </>
  )
}

export default Login