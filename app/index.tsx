import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import signUp from "@/app/(auth)/sign-up";

const Home = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  }
  return <Redirect href="/(auth)/welcome" />;
};

export default Home;
