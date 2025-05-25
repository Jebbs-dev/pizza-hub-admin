"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa6";
import { useToast } from "@/hooks/use-toast";

const images = [
  "/images/auth-bg-1.jpg",
  "/images/auth-bg-2.jpg",
  "/images/auth-bg-3.jpg",
];

const AuthPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { toast } = useToast();

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();

    // Cleanup on unmount
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
    resetInterval();
  };

  const handleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Authentication Error",
        description: "Failed to sign in with Google. Please try again.",
      });
    }
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen text-3xl text-orange-400">
        Loading
        <FaSpinner className="ml-3 animate-spin" />
      </div>
    );
  }

  if (session) {
    router.push("/");
  }

  return (
    <div className="w-full h-full md:h-screen bg-orange-50 dark:bg-primary/5 flex flex-col lg:grid lg:grid-cols-2 relative overflow-hidden">
      {/* Slides */}
      {images.map((url, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out lg:hidden  ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${url})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      ))}
      <div className="relative bg-black lg:bg-orange-50 lg:bg-[url('/images/new-bg-1.jpg')] bg-cover  w-full h-full bg-opacity-50 lg:bg-opacity-100 lg:z-0">
        <div className="sm:h-[100vh] min-h-screen lg:bg-opacity-70 text-sm flex items-center lg:z-20">
          <h1 className="absolute top-3 left-5 mx-auto md:top-10 md:left-10 text-black dark:text-foreground text-2xl md:text-3xl">
            <>
              {/* Mobile image */}
              <Image
                src="/images/logo/pizza-hut-dark.png"
                alt="Logo"
                width={150}
                height={100}
                className="block lg:hidden"
              />

              {/* Desktop image */}
              <Image
                src="/images/logo/pizza-hut-light.png"
                alt="Logo"
                width={150}
                height={100}
                className="hidden lg:block"
              />
            </>
          </h1>
          <div className="w-[80%] h-[300px] mx-auto flex flex-col justify-center space-y-4 xl:w-[60%] bg-orange-50 bg-opacity-60 lg:bg-transparent border-2 border-orange-400 rounded-md p-4 lg:p-10 mt-10 sm:mt-0">
            <h1 className="text-2xl md:text-3xl font-semibold text-white text-center mb-3">
              Sign in to your account
            </h1>
            <p className="text-sm md:text-base text-center  lg:text-neutral-600 dark:text-foreground font-light">
              Click the button below to use your Google account to sign in
            </p>

            <div className="flex flex-row items-center justify-center">
              <Button
                onClick={handleSignIn}
                className="bg-white text-black border border-orange-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-60 transition"
              >
                <FcGoogle size={32} />
                <span>Sign in with Google</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:h-screen md:w-full py-14 pr-20">
        <div className="relative h-full w-full rounded-3xl overflow-hidden">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-xl"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Dots */}

        {/* <div className="absolute inset-0 bg-transparent dark:bg-black/30 z-10" /> */}
      </div>
    </div>
  );
};

export default AuthPage;
