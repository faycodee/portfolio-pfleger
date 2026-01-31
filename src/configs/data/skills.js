// src/configs/data/skills.js
import {
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTypescript,
  SiCplusplus,
  SiHaskell,
  SiPython,
  SiJavascript,
  SiLinux,
  SiDocker,
  SiGithub,
  SiSecurityscorecard,
  SiShieldsdotio,
  SiKubernetes,
  SiExpress,
  SiMysql,
  SiTailwindcss
} from 'react-icons/si';

import {
  FaCode,
  FaRegFileCode,
  FaTerminal,
  FaReact,
  FaNodeJs,
  FaNetworkWired,
  FaRegistered,
  FaPython,
  FaShieldAlt
} from 'react-icons/fa';
import { FaShield } from 'react-icons/fa6';
import { TbCloudDataConnection, TbLoadBalancer } from 'react-icons/tb';
import { BsSpeedometer } from 'react-icons/bs';
import { MdArchitecture } from 'react-icons/md';
import { DiRedis } from 'react-icons/di';

export const SKILLS_DATA = {
  hardSkills: [
    { name: "Grundpflege", icon: "FaHandHoldingHeart" },
    { name: "Behandlungspflege", icon: "FaStethoscope" },
    { name: "Dokumentation", icon: "FaFileMedical" },
    { name: "Notfallmanagement", icon: "FaFirstAid" }
  ],
  softSkills: [
    "Empathie", "Belastbarkeit", "Teamfähigkeit", "Zuverlässigkeit"
  ],
  languages: [
    { lang: "Deutsch", level: "B2 (Zertifiziert)", percentage: 80 },
    { lang: "Arabisch", level: "Muttersprache", percentage: 100 },
    { lang: "Französisch", level: "Fließend", percentage: 85 }
  ]
};