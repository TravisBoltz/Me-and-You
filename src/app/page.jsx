"use client";
import { useState, useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@/dbConfig/firebase";

export default function Dashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Login into account");
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  useEffect(() => {
    // If user is logged in, redirect to another page
    if (user) {
      window.location.href = "/chatPage";
    }
  }, [user]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <div
        className={`h-screen p-8 flex items-center justify-center ${
          loading ? "opacity-25" : ""
        }`}
      >
        <Tabs defaultValue="Login into account" className="w-[400px]">
          <TabsList className="grid w-full   text-black grid-cols-2">
            <TabsTrigger
              value="Login into account"
              onClick={() => setUserType("Login into account")}
            >
              Login into account
            </TabsTrigger>
            <TabsTrigger
              value="Create an account"
              onClick={() => setUserType("Create an account")}
            >
              Create an account
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Login into account">
            <Card>
              <CardContent className="space-y-2">
                <form action="" onSubmit={""} className="w-full">
                  <div className="w-full ">
                    <Image
                      className="mx-auto mt-2 "
                      src={"/logo-no-background.png"}
                      width={80}
                      height={80}
                    ></Image>
                    <div className="flex items-center justify-center p-auto">
                      <div className="mx-auto grid w-[350px] gap-2">
                        <div className="grid gap-2 text-center">
                          <h2 className="text-gray-600 font-bold text-3xl leading-normal">
                            WELCOME BACK
                          </h2>
                          <h1 className="text-xl font-bold">
                            Login into account
                          </h1>
                          <p className="text-balance text-muted-foreground">
                            Enter your email below to Login into account to your
                            account
                          </p>
                        </div>
                        <div className="grid gap-4">
                          <div className="">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="username@knust.edu.gh"
                              required
                              value={email}
                              onChange={handleEmailChange}
                            />
                          </div>

                          <div className="grid gap-2">
                            <div className="flex items-center">
                              <Label htmlFor="password">Password</Label>
                              <Link
                                href="/Pages/authentication/forgot-password"
                                className="ml-auto inline-block text-sm text-blue-600"
                              >
                                Forgot your password?
                              </Link>
                            </div>
                            <Input
                              id="password"
                              type="password"
                              required
                              value={password}
                              onChange={handlePasswordChange}
                            />
                          </div>
                          <Button
                            variant="outline"
                            type="submit"
                            className=" w-full border-gray-700"
                          >
                            Login into account
                          </Button>
                          <Button
                            onClick={
                              () => signInWithGoogle() //"", { prompt: "select account" })
                            }
                            variant="outline"
                            className="flex w-full border-green-600 text-green-600 "
                          >
                            <img
                              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                              alt="Google Logo"
                              className="h-5 mr-2"
                            />
                            Signin with Google
                          </Button>
                        </div>
                      </div>
                    </div>
                    {/* <div className="hidden bg-muted lg:block">
                     <Image
                      src="/.png"
                      alt="Image"
                      width="1920"
                      height="1080"
                      className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    /> 
                  </div> */}
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Create an account">
            <Card>
              <CardContent className="space-y-2">
                <form action="" onSubmit={""} className="w-full">
                  <div className="w-full ">
                    <Image
                      className="mx-auto mt-2 "
                      src={"/logo-no-background.png"}
                      width={80}
                      height={80}
                    ></Image>
                    <div className="flex items-center justify-center p-auto">
                      <div className="mx-auto grid w-[350px] gap-2">
                        <div className="grid gap-2 text-center">
                          <h2 className="text-gray-600 font-bold text-3xl leading-normal">
                            Let's Connect.....{" "}
                          </h2>{" "}
                          <h1 className="text-xl font-bold">
                            Create an account
                          </h1>
                          <p className="text-balance text-muted-foreground">
                            Join our community by creating an account
                          </p>
                        </div>
                        <div className="grid gap-4">
                          <div className="">
                            <Label htmlFor="name">User Name</Label>
                            <Input
                              id="name"
                              type="name"
                              placeholder="FoM"
                              required
                              value={email}
                              onChange={handleEmailChange}
                            />
                          </div>
                          <div className="">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="username@knust.edu.gh"
                              required
                              value={email}
                              onChange={handleEmailChange}
                            />
                          </div>{" "}
                          {/* <div className="">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="username@knust.edu.gh"
                              required
                              value={email}
                              onChange={handleEmailChange}
                            />
                          </div> */}
                          <div className="grid gap-2">
                            <div className="flex items-center">
                              <Label htmlFor="password">Password</Label>
                            </div>
                            <Input
                              id="password"
                              type="password"
                              required
                              value={password}
                              onChange={handlePasswordChange}
                            />
                          </div>
                          <Button
                            variant="outline"
                            type="submit"
                            className=" w-full border-gray-700"
                          >
                            Create an account
                          </Button>
                          <Button
                            onClick={
                              () => signInWithGoogle() //"", { prompt: "select account" })
                            }
                            variant="outline"
                            className="w-full border-green-500 text-green-500 flex"
                          >
                            {" "}
                            <img
                              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                              alt="Google Logo"
                              className="h-5 mr-2"
                            />
                            Signup with Google
                          </Button>
                        </div>
                      </div>
                    </div>
                    {/* <div className="hidden bg-muted lg:block">
                     <Image
                      src="/.png"
                      alt="Image"
                      width="1920"
                      height="1080"
                      className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    /> 
                  </div> */}
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      {/* <Footer /> */}
    </>
  );
}
