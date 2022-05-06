const SignUp = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <div className="signup">
        <form>
          <label>
            Username:
            <input type="text" placeholder="Username" />
          </label>
          <label>
            Password:
            <input type="text" placeholder="password" />
          </label>
          <label>
            Confirm Password:
            <input type="text" placeholder="confirm password" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default SignUp
