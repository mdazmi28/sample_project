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
                submenus: ['a', 'b', 1, 2, 3, 4, 5,]
            },
            {
                icon: "/images/teacher.png",
                label: "Teachers",
                href: "/list/teachers",
                visible: ["admin", "teacher"],
                submenus: ['a', 'b', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 7, 4, 3, 33, 2,]
            },
            {
                icon: "/images/student.png",
                label: "Students",
                href: "/list/students",
                submenus: ['a', 'b', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 7, 4, 3, 33, 2,]
            },
            {
                icon: "/images/parent.png",
                label: "Parents",
                href: "/list/parents",
                visible: ["admin", "teacher"],
                submenus: ['a', 'b', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 7, 4, 3, 33, 2,]
            },
            {
                icon: "/images/subject.png",
                label: "Subjects",
                href: "/list/subjects",
                visible: ["admin"],
                submenus: ['a', 'b', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 7, 4, 3, 33, 2,]
            },
            {
                icon: "/images/class.png",
                label: "Classes",
                href: "/list/classes",
                visible: ["admin", "teacher"],
                submenus: ['a', 'b', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 7, 4, 3, 33, 2,]
            },
            {
                icon: "/images/lesson.png",
                label: "Lessons",
                href: "/list/lessons",
                visible: ["admin", "teacher"],
                submenus: ['a', 'b', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 7, 4, 3, 33, 2,]
            },
            {
                icon: "/images/exam.png",
                label: "Exams",
                href: "/list/exams",
                visible: ["admin", "teacher", "student", "parent"],
                submenus: ['a', 'b', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 7, 4, 3, 33, 2,]
            },
            {
                icon: "/images/assignment.png",
                label: "Assignments",
                href: "/list/assignments",
                visible: ["admin", "teacher", "student", "parent"],
                submenus: ['a', 'b', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 7, 4, 3, 33, 2,]
            },
            {
                icon: "/images/result.png",
                label: "Results",
                href: "/list/results",
                visible: ["admin", "teacher", "student", "parent"],
                submenus: ['a', 'b', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 7, 4, 3, 33, 2,]
            },
            {
                icon: "/images/attendance.png",
                label: "Attendance",
                href: "/list/attendance",
                visible: ["admin", "teacher", "student", "parent"],
                submenus: ['a', 'b', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 7, 4, 3, 33, 2,]
            },
            {
                icon: "/images/calendar.png",
                label: "Events",
                href: "/list/events",
                visible: ["admin", "teacher", "student", "parent"],
                submenus: ['a', 'b', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 7, 4, 3, 33, 2,]
            },
            {
                icon: "/images/message.png",
                label: "Messages",
                href: "/list/messages",
                visible: ["admin", "teacher", "student", "parent"],
                submenus: ['a', 'b', 1, 2, 3, 4, 5, 6, 7]
            },
            {
                icon: "/images/announcement.png",
                label: "Announcements",
                href: "/list/announcements",
                visible: ["admin", "teacher", "student", "parent"],
                submenus: ['a', 'b', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 7, 4, 3, 33, 2,]
            },
        ],
    },
    
];

const Menu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [hoveredMenuItem, setHoveredMenuItem] = useState(null);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };



    const handleMouseEnter = (menuItem) => {
        setHoveredMenuItem(menuItem);  // Set the hovered item
    };

    const handleMouseLeave = () => {
        setHoveredMenuItem(null);  // Reset when mouse leaves
    };

    return (
       <div className="">
         <div className={`pt-4 text-sm w-[270px] ${isMenuVisible ? 'bg-white' : ''}`}>
            
            {
                isMenuVisible ? (
                    <div className="flex items-center w-[247px] h-[329x] bg-yellow-300 rounded-3xl  cursor-pointer">
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
            <div className="flex">
                <div className="pt-4">
                    {menuItems.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2 w-[250px]">
                            {item.items.map((menuItem, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => handleMouseEnter(menuItem)}  // Track hover event
                                    // onMouseLeave={handleMouseLeave}
                                    href={menuItem.href}
                                    className="flex items-center justify-start gap-4 text-black py-2 md:px-2 rounded-md hover:bg-lamaSkyLight transition-all"
                                >
                                    <img src={menuItem.icon} width={20} height={20} />
                                    <span
                                        className={`transition-all  duration-300 ease-in-out ${isMenuVisible
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

                {/* Show submenus of hovered item */}
                {
                    isMenuVisible && hoveredMenuItem && (
                        <div>
                            <div className="bg-white flex flex-col gap-4 pl-[50px] pr-[170px] -mt-[44px] -l h-screen" onMouseLeave={handleMouseLeave}>
                            {hoveredMenuItem.submenus.map((submenu, idx) => (
                                <div key={idx} className="text-black">
                                    {submenu}
                                </div>
                            ))}
                        </div>
                        </div>
                    )
                }
            </div>
        </div>
       </div>
    );
};

export default Menu;