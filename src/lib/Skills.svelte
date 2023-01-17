<script>
    let activeskill = 0;
    let skills = [
        {
            active: true,
            title: "Software Developement",
            info: "I have experience in a variety of programming languages including C, C++, Matlab, Python, Rust, JavaScript, TypeScript and Java. I have worked on a variety of projects such as desktop applications, mobile apps, and web applications. I am familiar with software development methodologies such as Agile and Scrum, and I have experience working with version control systems like Git. I am also comfortable with working in Linux and Windows environments.",
        },
        {
            active: false,
            title: "Robotics Engineering",
            info: "I have experience in working with various robot platforms such as Arduino, Raspberry Pi, and ROS. I am familiar with basic robotic concepts such as kinematics, dynamics, and control. I have experience in programming robots using languages such as C++ and Python. I have also worked on projects involving computer vision and machine learning techniques. I have hands-on experience in building and programming robots for various applications such as autonomous navigation, object detection and recognition, and machine learning.",
        },
        {
            active: false,
            title: "Electronics",
            info: "I have experience in designing, building and testing electronic circuits and devices.  Working with various microcontrollers such as Arduino and STM32, I am familiar with programming languages such as C, C++ and Python and have experience in programming microcontrollers. My skills also include working with different types of sensors, actuators, and communication protocols, such as I2C, Serial and UART. I have experience in PCB design, including schematic capture and PCB layout KiCAD, and the process of designing and building electronic devices, including selecting components, testing, and debugging.",
        },
        {
            active: false,
            title: "3D Printing",
            info: "With a deep understanding of 3D printing technology, I have put my skills to use by running my own 3D printer at home. I have experience in preparing 3D models for printing, including slicing, adding support structures, and using rafts. Additionally, I have upgraded my printer with Mainsail and Klipper, a Raspberry Pi, and a Camera, which has allowed me to have greater control over the printer and improve the print quality. I am proficient in using various software such as Cura and PrusaSlicer for the preparation of 3D models for printing. Moreover, I possess knowledge of maintenance and problem solving, which I have gained through hands-on experience with my own printer. I am familiar with common issues such as clogged nozzles, layer shifting and warping, and have the ability to troubleshoot and fix them.",
        },
    ];
</script>

<div class="w-4/5 h-1/2 grid grid-cols-1 xl:grid-cols-3 gap-10 items-center">
    <div class="col-span-1 text-6xl font-bold text-center">Skills</div>
    <div class="col-span-1 ">
        {#each skills as skill, i}
            <div
                class=""
                on:mouseenter={() => {
                    activeskill = i;
                    skills.forEach((item) => {
                        item.active = false;
                    });
                    skill.active = true;
                }}
            >
                <div class="text-xl py-5 px-10 border rounded-full m-2" class:bg-primary={skill.active}>
                    {skill.title}
                </div>
            </div>
        {/each}
    </div>
    <div class="px-2 xl:px-4 col-span-1 text-justify text-sm md:text-lg">{skills[activeskill].info}</div>
</div>
