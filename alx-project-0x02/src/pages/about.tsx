import React from "react";
import Header from "../../components/layout/Header";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-700 p-10">
        <h1 className="text-3xl font-bold mb-6">About Page</h1>
        <div className="flex gap-4 flex-wrap">
          <Button size="small" shape="rounded-sm">Small Button</Button>
          <Button size="medium" shape="rounded-md">Medium Button</Button>
          <Button size="large" shape="rounded-full">Large Button</Button>
        </div>
      </main>
    </>
  );
};

export default About;
