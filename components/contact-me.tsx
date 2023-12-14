"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { Loader, Mail, Phone } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(10).max(500),
});

const ContactMe = () => {
    const [sending, setSending] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [colorError, setColorError] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });
    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            setSending(true);
            const response = await axios.post("/api/contact", data);
            if (response.status === 200) {
                setErrorMessage("Message sent! I'll contact you shortly.");
            }
        } catch (error) {
            console.log(error);
            setColorError(true);
            setErrorMessage("Something went wrong, try refreshing the page");
        } finally {
            form.reset();
            setSending(false);
            setTimeout(() => {
                setErrorMessage("");
                setColorError(false);
            }, 5000);
        }
    }
    return (
        <>
            <div className="flex-1 flex items-center justify-center" />
            <div className="w-full xl:w-[95%] flex items-center justify-center xl:h-full xl:p-28 gap-8">
                <div className="rounded-lg xl:h-full xl:w-1/2 w-full flex flex-col justify-start gap-2">
                    <div className="w-full">
                        <h2 className="font-thin text-6xl w-full border-b border-b-yellow-200 h-auto pb-4">
                            Send me a message
                        </h2>
                    </div>

                    <div className="flex flex-col w-full gap-8">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="flex flex-wrap gap-4"
                            >
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-2 w-full pt-4">
                                            <FormLabel htmlFor="name">
                                                Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    {...field}
                                                    placeholder="Your name or your company name"
                                                    className="rounded-lg border border-gray-300 p-2"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-2 w-full pt-4">
                                            <FormLabel htmlFor="email">
                                                Email
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    id="email"
                                                    type="text"
                                                    placeholder="Your email so I can contact you"
                                                    className="rounded-lg border border-gray-300 p-2"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-2 w-full pt-4">
                                            <FormLabel htmlFor="message">
                                                Message
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    id="message"
                                                    placeholder="Tell me how we can work together"
                                                    className="rounded-lg border border-gray-300 p-2"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex justify-between w-full">
                                    <div
                                        className={cn(
                                            "font-thin text-sm",
                                            colorError
                                                ? "text-red-500"
                                                : "text-green-500"
                                        )}
                                    >
                                        {errorMessage}
                                    </div>
                                    <Button
                                        type="submit"
                                        // className="rounded-lg bg-yellow-200 p-2 text-black"
                                        disabled={sending}
                                    >
                                        {!sending ? (
                                            "Send"
                                        ) : (
                                            <Loader
                                                size={24}
                                                className="animate-spin"
                                            />
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </Form>
                        <div className="w-full">
                            <h2 className="font-thin text-6xl w-full border-b border-b-yellow-200 h-auto pb-4">
                                Or contact me here
                            </h2>
                        </div>
                        <div className="w-full flex gap-4 flex-wrap">
                            <div className="flex-1 flex gap-4">
                                <Link href={"#"}>
                                    <FaInstagram size={30} />
                                </Link>
                                <Link href={"#"}>
                                    <FaXTwitter size={30} />
                                </Link>
                                <Link href={"#"}>
                                    <FaLinkedinIn size={30} />
                                </Link>
                                <Link href={"#"}>
                                    <FiGithub size={30} />
                                </Link>
                            </div>
                            <div className="flex-1 flex gap-4 xl:items-end flex-col">
                                <h4 className="flex gap-2">
                                    <Phone /> Phone number: (+57) 310-6044336
                                </h4>
                                <h4 className="flex gap-2">
                                    <Mail /> Email: angel.zuna@icloud.com
                                </h4>
                                <h4 className="flex gap-2">
                                    <Mail />
                                    Email: angel.2112b@gmail.com
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMe;
