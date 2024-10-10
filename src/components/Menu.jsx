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
            },
            {
                icon: "/images/student.png",
                label: "Students",
                href: "/list/students",
                //   visible: ["admin", "teacher"],
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
    return (
        <div className='mt-4 text-sm'>
            <div href="/" className='flex'>
                <img src="../../public/images/mainmenu.JPG" alt="Logo" width={32} height={32} />
                <span className="hidden lg:block font-bold"></span>
            </div>
            {
                menuItems.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2 mt-10'>
                        {/* <span className='hidden md:block text-gray-400 font-light my-4'>{item.title}</span> */}
                        {
                            item.items.map((menuItem, index) => (
                                <div key={index} href={menuItem.href} className='flex items-center justify-center lg:justify-start gap-4 text-black py-0 md:px-2 rounded-md hover:bg-lamaSkyLight'>
                                    <img src={menuItem.icon} width={20} height={20} />
                                    <span className='hidden'>{menuItem.label}</span>
                                </div>
                            ))
                        }

                    </div>
                ))
            }
        </div>
    );
};


export default Menu;
