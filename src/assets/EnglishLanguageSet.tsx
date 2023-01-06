import { INavigationLink, IContext } from "./StoreInterfaces";

export const navigationEN: INavigationLink[] = [
  { id: "#aboutme", sectionName: "about me" },
  { id: "#qualifications", sectionName: "qualifications" },
  { id: "#projects", sectionName: "projects" },
];
export const startEN: IContext = {
  text1: "Hello, my name is",
  text2: "Kamil",
  text3: "I am beginner",
  text4: "front end developer",
};
export const aboutmeEN: IContext = {
  text1: "about me",
  text2:
    "I am a fourth year student in the field of computer science specializing in business application design. The curriculum of my studies mainly focused on backend programming. After the sixth semester session ended, I decided that I would like to learn how to create an interesting frontend. I liked it so much that at this point it is the direction in which I would like to lead my career.",
};
export const qualificationsEN: IContext = {
  text1: "qualifications",
  text2:
    "Since July 2022, I have completed a series of courses after each creating a project to consolidate the knowledge gained. Courses I have completed on Udemy:",
  text3: [
    "Web development course part 1",
    "Web development course part 2",
    "Web Development Course Part 3",
    "Bootstrap course",
    "Javascript programming course",
    "Course of 10 projects in vanilla javascript - the above courses were created by MMC school",
    "React programming course created by Samurai of Programming",
    "Understanding TypeScript - 2023 Edition created and provided by Maximilian Schwarzmüller",
  ],
};
export const projectsEN: IContext = {
  text1: "projects",
  text2:
    "A fictional gym project - summarizes what I learned in the Understanding TypeScript course.",
  text3:
    "Clothing store project - my first application in React sums up learning this framework. ",
};
