// import { NextResponse } from 'next/server'

// export async function POST(req) {
// 	const TEXT = await req.json()
// 	const BOT_API_TOKEN = process.env.BOT_API_TOKEN
// 	const CHAT_ID = process.env.CHAT_ID
// 	const response = await fetch(
// 		`https://api.telegram.org/bot${BOT_API_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${TEXT}&parse_mode=HTML`
// 	)
// 	const resultResponse = await response.json()
// 	return NextResponse.json({
// 		ok: resultResponse.ok,
// 		errorDescription: resultResponse.description
// 	})
// }
