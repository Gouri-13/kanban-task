import { Avatar, AvatarBadge } from "@chakra-ui/react";
import inProgressIcon from "./icons_FEtask/in-progress.svg";
import backlogIcon from "./icons_FEtask/Backlog.svg";
import doneIcon from "./icons_FEtask/Done.svg";
import cancelIcon from "./icons_FEtask/Cancelled.svg";
import todoIcon from "./icons_FEtask/To-do.svg";
import noPriorityIcon from "./icons_FEtask/No-priority.svg";
import lowIcon from "./icons_FEtask/Img - Low Priority.svg";
import mediumIcon from "./icons_FEtask/Img - Medium Priority.svg";
import highIcon from "./icons_FEtask/Img - High Priority.svg";
import urgentIcon from "./icons_FEtask/SVG - Urgent Priority colour.svg";

export default function Icons({ groupKey, userData }) {
    const user = userData.find((user) => user.name === groupKey);
    if (groupKey === "In progress") return (
      <img 
        src= {inProgressIcon} 
        alt="inProgress icon" 
        style={{ width: '12px', marginRight: '8px' }}
      />
    );
    if (groupKey === "Backlog") return (
      <img 
        src= {backlogIcon} 
        alt="Backlog icon" 
        style={{ width: '12px', marginRight: '8px' }}
      />
    );
    if (groupKey === "Done") return (
      <img 
        src= {doneIcon} 
        alt="DOne icon" 
        style={{ width: '12px', marginRight: '8px' }}
      />
    );
    if (groupKey === "Canceled") return (
      <img 
        src= {cancelIcon} 
        alt="Cancelled icon" 
        style={{ width: '12px', marginRight: '8px' }}
      />
    );
    if (groupKey === "Todo") return (
      <img 
        src= {todoIcon} 
        alt="To-do icon" 
        style={{ width: '12px', marginRight: '8px' }}
      />
    );
    if (groupKey === "0") return (
      <img 
        src= {noPriorityIcon} 
        alt="No Priority icon" 
        style={{ width: '12px', marginRight: '8px' }}
      />
    );
    if (groupKey === "4") return (
      <img 
        src= {urgentIcon} 
        alt="Urgent icon" 
        style={{ width: '12px', marginRight: '8px' }}
      />
    );
    if (groupKey === "2") return (
      <img 
        src= {mediumIcon} 
        alt="Medium Priority icon" 
        style={{ width: '12px', marginRight: '8px' }}
      />
    );
    if (groupKey === "3") return (
      <img 
        src= {highIcon} 
        alt="High Priority icon" 
        style={{ width: '12px', marginRight: '8px' }}
      />
    );
    if (groupKey === "1") return (
      <img 
        src= {lowIcon} 
        alt="Low Priority icon" 
        style={{ width: '12px', marginRight: '8px' }}
      />
    );
    else
          return (
                <Avatar name={user.name} w={5} mr={2} h={5} size={"xs"}>
                      {user.available ? (
                            <AvatarBadge boxSize="1em" bg="yellow.400" />
                      ) : (
                            <AvatarBadge boxSize="1em" bg="gray.400" />
                      )}
                </Avatar>
          );
}