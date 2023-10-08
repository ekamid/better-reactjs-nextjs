export const getEmoji = async () => {
    try {
        const res = await fetch("https://emojihub.yurace.pro/api/random");
        const data = await res.json();

        return {
            name: data?.name,
            code: data?.htmlCode[0]
        }
    } catch (error: any) {
        console.error(error)
    }
}