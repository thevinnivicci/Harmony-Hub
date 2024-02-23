"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="w-full text-white bg-black min-h-screen capitalize flex flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h1 className="lg:text-[3vw] text-[8vw]">Featured Courses</h1>
        <p className="lg:text-[2vw] text-[4vw]">Learn with the Best</p>
      </div>
      <div className="w-full lg:px-[2vw] p-5">
        <div className="grid w-full h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 overflow-hidden ">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center w-full p-5">
              <BackgroundGradient className="lg:w-[25vw] w-full bg-black rounded-3xl p-5 h-[30vh] flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-3">
                  <h2 className="text-lg font-semibold">{course.title}</h2>
                  <p className="text-base text-center">{course.description}</p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className=" border p-3"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <Button borderRadius="1.75rem" className=" bg-transparent">
          View All Courses
        </Button>
      </div>
    </div>
  );
};

export default FeaturedCourses;
