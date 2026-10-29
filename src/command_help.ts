
import type { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>): void {
  console.log("\nWelcome to the Pokedex!");
  console.log("Usage:\n");

  for (const key in commands) {
    const cmd = commands[key];
    console.log(`${cmd.name}: ${cmd.description}`);
  }
  console.log("");
}
