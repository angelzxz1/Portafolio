import Section from "@/components/section";
import { Separator } from "@/components/ui/separator";
import { SiNextdotjs, SiTailwindcss, SiPrisma } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import {
    Briefcase,
    ClipboardList,
    Code2,
    ExternalLink,
    MapPin,
    Rocket,
    User,
} from "lucide-react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ContactMe from "@/components/contact-me";

const Lines = () => {
    const Lines = [0, 1, 2, 3, 4, 5, 6, 7];
    return (
        <div className="hidden xl:flex flex-col justify-evenly items-center flex-1">
            <Separator orientation="vertical" className="h-1/3 bg-white" />
            <div className="border border-yellow-200 h-8 w-8 rounded-full flex items-center justify-center relative">
                <div className=" animate-[spin_5s_linear_infinite] h-full w-full flex items-center justify-center absolute">
                    {Lines.map((line) => (
                        <div
                            key={line}
                            className={cn("h-px absolute w-full ")}
                            style={{
                                transform: `rotate(${45 * line}deg)`,
                            }}
                        >
                            <div
                                className={cn(
                                    "h-px bg-white absolute left-full ml-4",
                                    line % 2 === 0 && "w-1/4 "
                                )}
                            ></div>
                        </div>
                    ))}
                </div>
                <div className="animate-[spin_4s_linear_infinite] direction-reverse h-full w-full flex items-center justify-center absolute">
                    {Lines.map((line) => (
                        <div
                            key={line}
                            className={cn("h-px absolute w-full ")}
                            style={{
                                transform: `rotate(${45 * line}deg)`,
                            }}
                        >
                            <div
                                className={cn(
                                    "h-px bg-white absolute left-full ml-4",
                                    line % 2 !== 0 && "w-1/3 "
                                )}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
            <Separator orientation="vertical" className="h-1/3 bg-white" />
        </div>
    );
};

export default function Home() {
    return (
        <>
            <Section
                id="sectiohomen1"
                className="bg-gradient-to-br from-white/25"
                style={{
                    clipPath: "polygon(0 0%, 100% 0, 100% 94%, 0 100%)",
                }}
            >
                <div className="flex w-full h-full justify-between xl:pt-[7.5rem] pt-0 px-12">
                    <Lines />
                    <div className="w-full xl:w-[95%] flex items-center justify-center pt-16 xl:px-28 gap-16 flex-wrap">
                        <div className="w-full xl:flex-1 xl:h-full flex flex-col gap-6">
                            <h1 className="font-thin text-6xl flex items-end">
                                Angel Zuniga
                            </h1>
                            <div className="flex gap-4">
                                <HoverCard>
                                    <HoverCardTrigger asChild>
                                        <div className="buttonStyle rounded-sm">
                                            <Rocket
                                                strokeWidth={1}
                                                className="bg-emerald-500 p-1 rounded-sm h-8 w-8 cursor-pointer "
                                            />
                                        </div>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="w-auto bg-emerald-500 ">
                                        Looking for a job!
                                    </HoverCardContent>
                                </HoverCard>
                                <div className="buttonStyle rounded-sm">
                                    <Button className=" p-1 h-8">Resume</Button>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-">
                                <h2 className="font-thin text-2xl leading-none text-white/50">
                                    Full Stack Developer
                                </h2>
                                <Code2 className="w-6 h-6 text-white/50" />
                                <Separator className=" bg-white/30 flex-1 mt-[2px]" />
                            </div>
                            <div className="flex items-center gap-2 text-">
                                <h3 className="font-thin text-xl leading-none text-white/50">
                                    Barranquilla, Colombia
                                </h3>
                                <MapPin className="w-6 h-6 text-white/50" />
                                <Separator className=" bg-white/30 flex-1 mt-[2px]" />
                            </div>

                            <div className="border border-yellow-200 h-12 w-full rounded-full flex items-center justify-center">
                                <User strokeWidth={1} className="mr-4" />
                                About me
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <p className="font-thin text-xl leading-none text-white/50">
                                    I am a full stack developer with experience
                                    in web and mobile development. I am
                                    passionate about creating solutions to
                                    problems and learning new technologies.
                                </p>
                                <p className="font-thin text-xl leading-none text-white/50">
                                    This is the stack that I use:
                                </p>
                            </div>
                            <div className="flex xl:justify-between gap-4 flex-wrap">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>TypeScript</li>
                                </ul>
                                <ul>
                                    <li>React</li>
                                    <li>Next.js</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                </ul>
                                <ul>
                                    <li>PostgreSQL</li>
                                    <li>MySQL</li>
                                    <li>Sequelize</li>
                                    <li>Prisma</li>
                                </ul>
                                <ul>
                                    <li>Shadcn/ui</li>
                                    <li>Tailwind</li>
                                    <li>ChakraUI</li>
                                    <li>SASS</li>
                                </ul>
                                <ul>
                                    <li>NPM</li>
                                    <li>Bun</li>
                                    <li>Bash</li>
                                    <li>Git / GitHub</li>
                                </ul>
                                <ul>
                                    <li>React Native</li>
                                    <li>Electron js</li>
                                    <li>Java</li>
                                    <li>Docker</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full xl:flex-1 h-full flex flex-col gap-6">
                            <div className="border border-yellow-200 h-12 w-full gap-4 rounded-full flex items-center justify-center">
                                <Briefcase strokeWidth={1} /> Work Experience
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <div className="flex-1 flex flex-col gap-2">
                                        <h3 className="font-thin text-xl leading-none text-white/50">
                                            Web developer
                                        </h3>
                                        <h4 className="font-thin text-lg leading-none text-white/50">
                                            OF Digital
                                        </h4>
                                        <p className="font-thin text-lg leading-none text-white/50">
                                            2018 - 2019
                                        </p>
                                    </div>
                                    <Separator
                                        orientation="vertical"
                                        className="bg-white/50"
                                    />
                                    <div className="flex-1 flex flex-col gap-2">
                                        <h3 className="font-thin text-xl leading-none text-white/50">
                                            Lead team developer
                                        </h3>
                                        <h4 className="font-thin text-lg leading-none text-white/50">
                                            OF Digital
                                        </h4>
                                        <p className="font-thin text-lg leading-none text-white/50">
                                            2019 - 2019
                                        </p>
                                    </div>
                                </div>
                                <Separator className="bg-white/50" />
                                <div className="flex gap-4">
                                    <div className="flex-1 flex flex-col gap-2">
                                        <h3 className="font-thin text-xl leading-none text-white/50">
                                            Full Stack Developer
                                        </h3>
                                        <h4 className="font-thin text-lg leading-none text-white/50">
                                            Freelance
                                        </h4>
                                        <p className="font-thin text-lg leading-none text-white/50">
                                            2022 - Present
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-yellow-200 h-12 w-full gap-4 rounded-full flex items-center justify-center">
                                <ClipboardList strokeWidth={1} /> Projects
                            </div>
                            <div className="grid xl:grid-rows-2 xl:grid-cols-2 grid-rows-3 grid-cols-1 gap-4">
                                <div className="flex-1 flex flex-col gap-2 xl:col-start-1 xl:col-end-1 xl:row-start-1 xl:row-end-1 row-span-1">
                                    <div className="flex gap-3 items-center">
                                        <h3 className="font-thin text-2xl leading-none text-white/80">
                                            Magic builder
                                        </h3>
                                        <Link href={""} target="_blank">
                                            <ExternalLink strokeWidth={1} />
                                        </Link>
                                    </div>

                                    <p className="font-thin text-lg leading-none text-white/50">
                                        A magic the gathering deck builder app
                                        using the Scryfall API.
                                    </p>
                                    <div className="flex gap-3">
                                        <SiNextdotjs size={30} />
                                        <FaReact size={30} />
                                        <SiTailwindcss size={30} />
                                        <SiPrisma size={30} />
                                        <TbBrandTypescript size={30} />
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-2 xl:col-start-2 xl:col-end-2 xl:row-start-1 xl:row-end-1 row-span-1">
                                    <div className="flex gap-3 items-center">
                                        <h3 className="font-thin text-2xl leading-none text-white/80">
                                            Finaz
                                        </h3>
                                        <Link href={""} target="_blank">
                                            <ExternalLink strokeWidth={1} />
                                        </Link>
                                    </div>

                                    <p className="font-thin text-lg leading-none text-white/50">
                                        A personal finance app to trach your
                                        records of income and expenses.
                                    </p>
                                    <div className="flex gap-3">
                                        <SiNextdotjs size={30} />
                                        <FaReact size={30} />
                                        <SiTailwindcss size={30} />
                                        <SiPrisma size={30} />
                                        <TbBrandTypescript size={30} />
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-2 xl:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-2 row-span-1">
                                    <div className="flex gap-3 items-center">
                                        <h3 className="font-thin text-2xl leading-none text-white/80">
                                            How to adult?
                                        </h3>
                                        <Link href={""} target="_blank">
                                            <ExternalLink strokeWidth={1} />
                                        </Link>
                                    </div>

                                    <p className="font-thin text-lg leading-none text-white/50">
                                        A web app to help young people to learn
                                        about things that are not normally
                                        taught in highschool.
                                    </p>
                                    <div className="flex gap-3">
                                        <SiNextdotjs size={30} />
                                        <FaReact size={30} />
                                        <SiTailwindcss size={30} />
                                        <SiPrisma size={30} />
                                        <TbBrandTypescript size={30} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex-1 flex items-center justify-center"></div>
                </div>
            </Section>
            <Section id="contact">
                <div className="flex w-full h-full items-center justify-center px-12">
                    <ContactMe />
                    <Lines />
                </div>
            </Section>
        </>
    );
}
