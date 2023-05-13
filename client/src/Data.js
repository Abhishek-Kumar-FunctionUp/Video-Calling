import { MdHomeFilled, MdOutlinePermContactCalendar, MdScreenShare } from 'react-icons/md';
import { AiOutlineMail, AiOutlineCalendar, AiOutlineAppstore, AiFillCalculator } from 'react-icons/ai';
import { BiChat } from 'react-icons/bi';
import { CgGames } from 'react-icons/cg';
import { TbBrandZoom } from 'react-icons/tb';
import { TfiBlackboard } from 'react-icons/tfi';
import { FaMicrophone } from 'react-icons/fa';
import { BsCameraVideoFill, BsFillPeopleFill, BsFillChatFill, BsFillRecordCircleFill } from 'react-icons/bs';

export const navData = [
    {
        icon: <MdHomeFilled/>,
        action: "Home"
    },
    {
        icon: <AiOutlineMail/>,
        action: "Mail"
    },
    {
        icon: <AiOutlineCalendar/>,
        action: "Calendar"
    },
    {
        icon: <BiChat/>,
        action: "Team Chat"
    },
    {
        icon: <TbBrandZoom/>,
        action: "Meeting"
    },
    {
        icon: <MdOutlinePermContactCalendar/>,
        action: "Contacts"
    },
    {
        icon: <AiOutlineAppstore/>,
        action: "Apps"
    },
    {
        icon: <TfiBlackboard/>,
        action: "Whiteboards"
    },
]

export const meetBar = [
    {
        icon:<FaMicrophone/>,
        action: "Mic",
    },
    {
        icon:<BsCameraVideoFill/>,
        action: "Video"
    },
    {
        icon:<BsFillPeopleFill/>,
        action: "Participants"
    },
    {
        icon:<BsFillChatFill/>,
        action: "Chat"
    },
    {
        icon:<MdScreenShare/>,
        action: "Share Screen"
    },
    {
        icon:<BsFillRecordCircleFill/>,
        action: "Record"
    },
    {
        icon:<AiFillCalculator/>,
        action: "Calculator"
    },
    {
        icon:<CgGames/>,
        action: "Games"
    },
    {
        icon: <TfiBlackboard/>,
        action: "Whiteboard"
    },
]