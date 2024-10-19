export function isValidContent(content: unknown): boolean
{
    return (typeof content === "string" || (typeof content === "object" && content !== null)) ? true : false;
}