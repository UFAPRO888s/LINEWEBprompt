import { useEffect, useState } from "react";
import Image from "next/image";
import { useLiff } from "hooks/useLiff";
export default function Profile() {
  const [displayName, setDisplayName] = useState("");
  const { error, isLoggedIn, isReady, liff } = useLiff();

  useEffect(() => {
    if (!isLoggedIn) return;

    (async () => {
      const profile = await liff.getProfile();
      setDisplayName(profile.displayName);
    })();
  });

  const loginHandler = () => {
    liff.login();
  };
  const logoutHandler = () => {
    liff.logout();
  };

  const showDisplayName = () => {
    if (error) return <p>Something is wrong.</p>;
    if (!isReady) return <p>Loading...</p>;

    if (!isLoggedIn) {
      return (
        <button className="App-button" onClick={loginHandler}>
          Login
        </button>
      );
    }
    return (
      <>
        <p>Welcome to the react-liff demo app, {displayName}!</p>
        <button className="App-button" onClick={logoutHandler}>
          Logout
        </button>
      </>
    );
  };

  return <div>{showDisplayName()}</div>;
}
