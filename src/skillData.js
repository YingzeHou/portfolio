import cpp from "./asset/c++.png"
import java from "./asset/java.png"
import js from "./asset/javascript.png"
import py from "./asset/python.png"
import R from "./asset/R.png"
import html from "./asset/html.png"

import spring from "./asset/spring.png"
import vue from "./asset/vue.png"
import node from "./asset/nodejs.png"
import react from "./asset/react.png"
import json from "./asset/json.png"

import sql from "./asset/mysql.png"
import sqlite from "./asset/sqlite.png"
import postgres from "./asset/postgres.png"
import oracle from "./asset/oracle.png"
import redis from "./asset/redis.png"

import postman from "./asset/postman.png"
import aws from "./asset/aws.png"
import docker from "./asset/docker.png"
import idea from "./asset/idea.png"
import git from "./asset/git.png"
import android from "./asset/android.png"

export const skillList = [
    {
        id:1,
        type:"Language",
        images: [cpp, java, js, py, R, html]
    },
    {
        id:2,
        type:"Framework",
        images: [spring, vue, node, react, json]
    },
    {
        id:3,
        type:"Database",
        images: [sql, sqlite, postgres, oracle, redis]
    },
    {
        id:4,
        type:"Platform",
        images: [postman, aws, docker, idea, git, android]
    }
]