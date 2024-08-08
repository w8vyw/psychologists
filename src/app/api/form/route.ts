import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.json()
	console.log(data)

	let body = ''

	for (const key in data) {
		body += encodeURIComponent(`<strong>${key}:</strong> ${data[key]}\n`)
	}

	console.log(body)

	const response = await fetch(
		`https://api.telegram.org/bot${process.env.BOT_API_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${body}&parse_mode=HTML`
	)

	const resultResponse = await response.json()

	return NextResponse.json({
		ok: resultResponse.ok,
		errorDescription: resultResponse.description
	})
}
