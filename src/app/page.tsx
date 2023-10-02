import { redirect } from "next/navigation";

const Homepage = () => {
  return redirect("/profile");
};

export default Homepage;
