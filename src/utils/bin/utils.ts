import packageJson from '../../../package.json';
import * as bin from './index';

export const go = async (_args: string[]): Promise<string> => {
  // Custom priority order
  const customOrder = ["about", "shopify_experts", "eagle_creek_security", "contact", "linkedin", "instagram", "github"];

  // Commands to ignore
  const ignoreCommands = ["go", "homepage"]; // Add any commands you want to exclude

  // Get dynamically generated commands, excluding ignored ones
  const commands = Object.keys(bin).filter(cmd => !ignoreCommands.includes(cmd));

  // Custom sorting logic
  const sortedCommands = commands.sort((a, b) => {
    const indexA = customOrder.indexOf(a);
    const indexB = customOrder.indexOf(b);

    if (indexA === -1 && indexB === -1) return a.localeCompare(b); // Alphabetical if both aren't in customOrder
    if (indexA === -1) return 1;  // Move non-prioritized items to the end
    if (indexB === -1) return -1; // Prioritize items in customOrder
    return indexA - indexB; // Sort based on customOrder position
  }).join('  |  ');

  return `Choose from the list of commands:\n\n${sortedCommands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

//export const echo = async (args: string[]): Promise<string> => {
//  return args.join(' ');
//};

//export const whoami = async (_args: string[]): Promise<string> => {
//  return 'guest';
//};

//export const date = async (_args: string[]): Promise<string> => {
//  return new Date().toString();
//};

export const shopify_experts = async (_args: string[]): Promise<string> => {
  window.open('https://cgstraface.com');

  return 'Opening website...';
};

export const eagle_creek_security = async (_args: string[]): Promise<string> => {
  window.open('https://cgstraface.com');

  return 'Opening website...';
};

export const contact = async (_args: string[]): Promise<string> => {
  window.open('mailto:cs@cstraface.com');

  return 'Opening mailto:cs@cstraface.com...';
};

//export const vi = async (_args: string[]): Promise<string> => {
//  return `why use vi? try 'emacs'.`;
//};

//export const vim = async (_args: string[]): Promise<string> => {
//  return `why use vim? try 'emacs'.`;
//};

//export const emacs = async (_args?: string[]): Promise<string> => {
//  return `really? emacs? you should be using 'vim'`;
//};

//export const sudo = async (args?: string[]): Promise<string> => {
// setTimeout(function () {
//    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
//  }, 1000);

//  return `Permission denied: unable to run the command '${args[0]}' as root.`;
//};

//export const repo = async (_args?: string[]): Promise<string> => {
//  setTimeout(function () {
//    window.open('https://github.com/m4tt72/terminal', '_blank');
//  }, 1000);
//
// return 'Opening repository...';
//};

//export const donate = async (_args?: string[]): Promise<string> => {
//  window.open(packageJson.funding.url, '_blank');

//  return 'Opening donation url...';
//};

export const homepage = (_args?: string[]): string => {
  return `

██████╗ ██████╗ ██╗ ██████╗██╗  ██╗              
██╔══██╗██╔══██╗██║██╔════╝██║ ██╔╝              
██████╔╝██████╔╝██║██║     █████╔╝               
██╔══██╗██╔══██╗██║██║     ██╔═██╗               
██████╔╝██║  ██║██║╚██████╗██║  ██╗              
╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝              
                                                 
███████╗███╗   ██╗████████╗███████╗██████╗       
██╔════╝████╗  ██║╚══██╔══╝██╔════╝██╔══██╗      
█████╗  ██╔██╗ ██║   ██║   █████╗  ██████╔╝█████╗
██╔══╝  ██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗╚════╝
███████╗██║ ╚████║   ██║   ███████╗██║  ██║      
╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝      
                                                 
██████╗ ██████╗ ██╗███████╗███████╗███████╗      
██╔══██╗██╔══██╗██║██╔════╝██╔════╝██╔════╝      
██████╔╝██████╔╝██║███████╗█████╗  ███████╗      
██╔═══╝ ██╔══██╗██║╚════██║██╔══╝  ╚════██║      
██║     ██║  ██║██║███████║███████╗███████║      
╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝      
                                                 
██╗     ██╗      ██████╗                         
██║     ██║     ██╔════╝                         
██║     ██║     ██║                              
██║     ██║     ██║                              
███████╗███████╗╚██████╗                         
╚══════╝╚══════╝ ╚═════╝    v${packageJson.version}


-----
Copyright © 2019 - 2025 Brick Enterprises, LLC. All Rights Reserved.
-----

Type 'go' to to get started.
`;
};
