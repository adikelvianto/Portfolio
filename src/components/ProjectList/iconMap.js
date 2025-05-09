import { Icon } from "@iconify/react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNotion,
  SiPalantir,
  SiPowerautomate,
  SiMicrosoftexcel,
  SiPostgresql,
  SiStreamlit,
  SiReact
} from "react-icons/si";
import {
  DiGit,
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiMsqlServer
} from "react-icons/di";
import { 
  FaAws,
  FaPhp 
} from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export const iconMap = {
    visualstudiocode: SiVisualstudiocode,
    postman: SiPostman,
    notion: SiNotion,
    palantir: SiPalantir,
    powerautomate: SiPowerautomate,
    microsoftexcel: SiMicrosoftexcel,
    postgresql: SiPostgresql,
    streamlit: SiStreamlit,
    react: SiReact,
    git: DiGit,
    javascript: DiJavascript1,
    nodejs: DiNodejs,
    python: DiPython,
    aws: FaAws,
    github: AiFillGithub,
    php: FaPhp,
    sqlserver: DiMsqlServer,
    jupyter: () => <Icon icon="devicon-plain:jupyter-wordmark" />,
    powerbi: () => <Icon icon="simple-icons:powerbi" />,
    tableau: () => <Icon icon="simple-icons:tableau" />,
    matlab: () => <Icon icon="file-icons:matlab" />,
    tensorflow: () => <Icon icon="cib:tensorflow" />,
    scikitlearn: () => <Icon icon="devicon-plain:scikitlearn" />,
    flask: () => <Icon icon="bxl:flask" />,
    r: () => <Icon icon="cib:r" />
  };
  
