import { useState } from "react";

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/images/home.png",
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/images/teacher.png",
                label: "Teachers",
                href: "/list/teachers",
                visible: ["admin", "teacher"],
                submenus: ['a','b',1,2,3,4,5,6,7,8,9,0,7,7,4,3,33,2,]
            },
            {
                icon: "/images/student.png",
                label: "Students",
                href: "/list/students",
            },
            {
                icon: "/images/parent.png",
                label: "Parents",
                href: "/list/parents",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/images/subject.png",
                label: "Subjects",
                href: "/list/subjects",
                visible: ["admin"],
            },
            {
                icon: "/images/class.png",
                label: "Classes",
                href: "/list/classes",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/images/lesson.png",
                label: "Lessons",
                href: "/list/lessons",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/images/exam.png",
                label: "Exams",
                href: "/list/exams",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/images/assignment.png",
                label: "Assignments",
                href: "/list/assignments",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/images/result.png",
                label: "Results",
                href: "/list/results",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/images/attendance.png",
                label: "Attendance",
                href: "/list/attendance",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/images/calendar.png",
                label: "Events",
                href: "/list/events",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/images/message.png",
                label: "Messages",
                href: "/list/messages",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/images/announcement.png",
                label: "Announcements",
                href: "/list/announcements",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/images/profile.png",
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/images/setting.png",
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/images/logout.png",
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
];

const Menu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [onMouse, setOnMouse] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };



    const mouseEnter = () =>{
        setOnMouse(!onMouse)
        console.log("Enter")
        console.log(onMouse)
    }
    const mouseLeace = () =>{
        console.log("Leave")
        console.log(onMouse)
        // setOnMouse(!onMouse)
    }

    return (
        <div className="mt-4 text-sm w-[270px] border">
            {
                isMenuVisible ? (
                    <div className="flex items-center w-[247px] h-[329x] bg-yellow-300 rounded-3xl px-2 py-1 cursor-pointer">
                        <div className="flex items-center" onClick={toggleMenu}>
                            <img src="/images/mainmenu.png" alt="Logo" width={32} height={32} />
                            <span className="">All Categories</span>
                        </div>
                    </div>
                ) : (
                    <div className="flex cursor-pointer" onClick={toggleMenu}>
                        <img src="/images/mainmenu.png" alt="Logo" width={32} height={32} />
                        {/* <span className="">All Categories</span> */}
                    </div>
                )
            }
          
            <div className="pt-4 border">
                {menuItems.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        {item.items.map((menuItem, index) => (
                            <div
                                key={index}
                                href={menuItem.href}
                                className="flex items-center justify-start gap-4 text-black py-2 md:px-2 rounded-md hover:bg-lamaSkyLight transition-all"
                            >
                                <img src={menuItem.icon} width={20} height={20} />
                                <span onMouseEnter={mouseEnter} onMouseLeave={mouseLeace}
                                    className={`transition-all duration-300 ease-in-out ${isMenuVisible
                                        ? "inline-block w-auto opacity-100"
                                        : "w-0 opacity-0 overflow-hidden"
                                        }`}
                                >
                                    {menuItem.label}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
