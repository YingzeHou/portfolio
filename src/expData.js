import meituan from "./asset/meituan.png"
import xunxiang from "./asset/xunxiang.png"
import sohu from "./asset/sohu.png"
import uwresearch from "./asset/uwresearch.jpg"
import hololens from "./asset/hololens.jpg"

export const expList = [
    {
        id:1,
        src: meituan,
        title: "Meituan Intern",
        time: "01.2021~05.2021",
        addr:"Beijing, China",
        position: "Software Engineer",
        desc1: "Coded and tested core ABS financial project in Java on high data load B-end loan transaction system web platform",
        desc2: "Deployed CI iteration and decrease of online error rate by 100%. Pioneered more than 300 automation test cases with TestNG to cover 3 times more logic and branckes",
        desc3: "Resolved high data load transaction latency by applying RDS, parallel batch I/O, and Redis caching based on sharding algorithm to cut down data retrieval time cost by 60%",
        desc4: "Created Apache Maven framework to reduce 50% of maintenance cost; Innovated staff turnover info statistic desktop app with JavaFX an POI to deduct workload from more than a week to less than five minutes",

    },
    {
        id:2,
        src: xunxiang,
        title: "Xunxiang Project",
        time: "12.2019~11.2021",
        addr:"Remote",
        position: "Software Enigneer",
        desc1: "Initiated and publicized web platform to help 1000% more international student to receive career tutoring service",
        desc2: "Transferred over 100 posts from WeChat to web to improve 500% reading rate with Springboot, Vue.js, and MySQL AWS could service",
        desc3: "Founded permission system with Redis and Shiro, as well as AOP concept and RESTful API to shorten post checking period from 2 weeks to 1 hour",
        desc4: "",
    },
    {
        id:3,       
        src: sohu,
        title: "Sohu Intern",
        time: "11.2020~01.2021",
        addr:"Beijing, China",
        position: "Data Analyst",
        desc1: "Analyzed couplings of more than a thousand users' interest in various categories of factionalism and develop weekly report",
        desc2: "Applied Python for data visualization, using regression model to determine the trend of user activities and predict patterns",
        desc3: "Designed and schemed online activities based on the prediction model to attract target user group during the Christmas",
        desc4: "",
    },
    {
        id:4,
        src: uwresearch,
        title: "DBMS Research",  
        time: "09.2021~Present",
        addr:"Madison, WI",
        position: "Research Assistant",
        desc1: "Researched and implemented wound-die algorithm with C++ for customized DBMS system with caching warmup to shoot down abort rate and query latency by 25% compared to schemas like 2PL and MVCC",
        desc2: "Expediated with Python and Matplotlib to visualize experiment result for multiple schema comparison to generate real-time graph report to ease result interpretation process",
        desc3: "Explored implementation and principles of Azure and Kubernetes for cloud management insigh and formulated solutions for virtual machine cloud based serverless computing BaaS/Faas model",
        desc4: "",
    },
    {
        id:5,
        src: hololens,
        title: "AR Research",
        time: "10.2021~Present",
        addr:"Madison, WI",
        position: "Research Assistant",
        desc1: "Formulated 3 solutions to enhance firefighting scene object matching and information retrieval rate by 80%",
        desc2: "Expedited with Python and Pytorch to train on image semantic segmentation neural network to predict segmentation of arbitrary object to achieve equipment detection and condition display",
        desc3: "Embedded U-net model into cooperative Hololens AR glasses to facilitate fire-fighter in more than 60% scenes",
        desc4: "",
    },

]
