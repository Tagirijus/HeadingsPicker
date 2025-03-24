import { editor, markdown } from "@silverbulletmd/silverbullet/syscalls";
import { stripMarkdown } from "@silverbulletmd/silverbullet/lib/markdown";
import { traverseTree } from "@silverbulletmd/silverbullet/lib/tree";


async function getHeadings() {
  // copied from
  // https://github.com/minusInfinite/outline-sidebar/blob/main/outline-sidebar.ts#L71-L91
  // by Ashley (https://github.com/minusInfinite)
  const text = await editor.getText();
  const tree = await markdown.parseMarkdown(text);
  const headers: Header[] = [];

  traverseTree(tree, (n) => {
    if (n.type?.startsWith("ATXHeading")) {
      let lvl = +n.type[n.type.length - 1];
      let name = (
        "— ".repeat(Math.max(0, lvl - 1))
        + n.children!.slice(1).map(stripMarkdown).join("").trim()
      );
      headers.push({
        name: name,
        pos: n.from!,
        level: lvl,
      });

      return true;
    }

    return false;
  });

  return headers;
}

export async function headingsPicker() {
  const headings = await getHeadings();
  const choice = await editor.filterBox("Headings Picker", headings);
  if (choice) {
    await editor.moveCursor(choice.pos, true);
  }
}
