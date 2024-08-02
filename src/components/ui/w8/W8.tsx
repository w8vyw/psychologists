import NextLink from 'next/link'

import { type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './W8.module.scss'

interface IW8Props extends ComponentPropsWithoutRef<'a'> {
	theme?: 'light' | 'dark'
}

export function W8({ theme = 'light', className, ...props }: IW8Props) {
	return (
		<NextLink
			className={clsx(styles.w8, className)}
			href='https://t.me/w8vyw'
			target='_blank'
			{...props}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 152 24'
				width='152'
				height='24'
			>
				{theme === 'light' ? (
					<>
						<path
							fill='#090923'
							d='M95.579 21.342a.358.358 0 0 1-.261-.112.358.358 0 0 1-.113-.261v-.15a.825.825 0 0 1 .075-.149l1.457-3.453L93.15 8.76a.856.856 0 0 1-.074-.261.454.454 0 0 1 .13-.28.354.354 0 0 1 .28-.131H95c.15 0 .261.037.336.112.075.075.13.155.168.243l2.485 6.103 2.559-6.103c.038-.1.094-.18.169-.243.074-.075.186-.112.336-.112h1.494c.1 0 .187.037.262.112a.336.336 0 0 1 .131.261.857.857 0 0 1-.075.299l-5.287 12.227c-.05.1-.112.18-.187.242-.075.075-.187.112-.336.112h-1.476zm-7.449-3.36c-.723 0-1.327-.124-1.813-.373a3.707 3.707 0 0 1-1.177-.952v.69c0 .125-.043.23-.13.318a.396.396 0 0 1-.318.13h-1.476a.433.433 0 0 1-.317-.13.432.432 0 0 1-.131-.318V4.99c0-.124.043-.23.13-.317a.433.433 0 0 1 .318-.131h1.588a.4.4 0 0 1 .318.13c.087.088.13.194.13.318v4.144c.312-.36.698-.653 1.159-.877.473-.237 1.046-.355 1.718-.355.66 0 1.233.112 1.72.336.485.224.89.541 1.213.952.337.398.592.865.767 1.4.174.535.267 1.114.28 1.736.012.224.018.43.018.616 0 .174-.006.373-.018.597a6.74 6.74 0 0 1-.3 1.792 4.312 4.312 0 0 1-.746 1.4 3.36 3.36 0 0 1-1.215.934c-.486.211-1.058.317-1.719.317zm-.692-1.997c.536 0 .953-.112 1.252-.336a1.91 1.91 0 0 0 .635-.915c.137-.373.218-.784.243-1.232a8.406 8.406 0 0 0 0-1.12 4.243 4.243 0 0 0-.243-1.232 1.801 1.801 0 0 0-.635-.896c-.299-.236-.716-.355-1.252-.355-.498 0-.903.112-1.214.336-.311.224-.548.51-.71.859-.162.336-.249.69-.261 1.064a13.123 13.123 0 0 0 0 1.437c.024.386.105.766.242 1.139.15.36.38.66.692.896.323.236.74.355 1.251.355zm-16.81 1.997c-.647 0-1.22-.106-1.719-.317a3.346 3.346 0 0 1-1.214-.934 4.31 4.31 0 0 1-.747-1.4 6.74 6.74 0 0 1-.299-1.792 10.844 10.844 0 0 1-.019-.597c0-.187.007-.392.02-.616.024-.622.117-1.2.28-1.736a4.308 4.308 0 0 1 .747-1.4c.336-.41.747-.728 1.232-.952.499-.224 1.072-.336 1.72-.336.672 0 1.239.118 1.7.355.473.224.865.516 1.176.877V4.99a.47.47 0 0 1 .112-.317.457.457 0 0 1 .337-.131h1.588c.124 0 .23.044.317.13.087.088.13.194.13.318v12.357c0 .125-.043.23-.13.318a.433.433 0 0 1-.317.13h-1.476a.455.455 0 0 1-.337-.13.471.471 0 0 1-.112-.318v-.69a3.66 3.66 0 0 1-1.195.952c-.474.248-1.071.373-1.794.373zm.692-1.997c.523 0 .94-.119 1.251-.355a2.13 2.13 0 0 0 .691-.896c.15-.373.23-.753.243-1.139a13.123 13.123 0 0 0 0-1.437 2.626 2.626 0 0 0-.261-1.064 2.163 2.163 0 0 0-.71-.859c-.312-.224-.716-.336-1.215-.336-.523 0-.94.119-1.251.355a1.915 1.915 0 0 0-.654.896 4.243 4.243 0 0 0-.243 1.232 16.73 16.73 0 0 0 0 1.12c.025.448.106.859.243 1.232s.355.678.654.915c.311.224.728.336 1.252.336zm-10.895 1.997c-1.382 0-2.478-.398-3.288-1.194-.81-.797-1.245-1.93-1.307-3.398a4.84 4.84 0 0 1-.019-.466c0-.2.006-.355.019-.467.05-.933.261-1.742.635-2.427a3.928 3.928 0 0 1 1.588-1.568c.672-.373 1.463-.56 2.372-.56 1.01 0 1.856.212 2.541.635.685.41 1.202.99 1.55 1.736.35.734.524 1.587.524 2.557v.392c0 .125-.044.23-.131.318a.455.455 0 0 1-.336.13H58.37v.15c.013.435.094.84.243 1.213.162.36.393.653.691.877.312.224.68.336 1.103.336.349 0 .641-.05.878-.149a2.39 2.39 0 0 0 .897-.71c.112-.149.199-.236.261-.26a.726.726 0 0 1 .318-.057h1.606a.41.41 0 0 1 .3.112.305.305 0 0 1 .111.28c-.012.2-.118.442-.317.728-.187.287-.461.567-.822.84-.361.274-.816.504-1.364.691-.536.174-1.152.261-1.85.261zm-2.055-5.88h4.13v-.056c0-.485-.082-.908-.244-1.269a2.006 2.006 0 0 0-.71-.859c-.311-.211-.685-.317-1.12-.317-.437 0-.81.106-1.122.317a2.007 2.007 0 0 0-.71.859c-.149.36-.224.784-.224 1.27v.055zm-9.344 5.694a.433.433 0 0 1-.317-.131.432.432 0 0 1-.13-.317V8.556c0-.137.043-.25.13-.336a.433.433 0 0 1 .317-.131h1.514c.124 0 .23.043.317.13.1.088.15.2.15.337v.765a2.814 2.814 0 0 1 1.102-.915c.46-.211.99-.317 1.588-.317h.766c.137 0 .243.043.318.13.087.088.13.193.13.318V9.88c0 .124-.043.23-.13.317a.396.396 0 0 1-.318.13h-1.457c-.598 0-1.065.169-1.401.505-.324.336-.486.796-.486 1.381v5.133c0 .125-.044.23-.13.318a.455.455 0 0 1-.337.13h-1.626zm-7.046.186c-1.382 0-2.478-.398-3.287-1.194-.81-.797-1.246-1.93-1.308-3.398a4.844 4.844 0 0 1-.018-.466c0-.2.006-.355.018-.467.05-.933.262-1.742.635-2.427a3.928 3.928 0 0 1 1.588-1.568c.673-.373 1.464-.56 2.373-.56 1.009 0 1.856.212 2.54.635a3.89 3.89 0 0 1 1.551 1.736c.349.734.523 1.587.523 2.557v.392c0 .125-.043.23-.13.318a.455.455 0 0 1-.337.13h-6.202v.15c.012.435.093.84.243 1.213.162.36.392.653.69.877.312.224.68.336 1.103.336.349 0 .642-.05.878-.149a2.384 2.384 0 0 0 .897-.71c.112-.149.2-.236.261-.26a.726.726 0 0 1 .318-.057h1.607c.124 0 .224.038.299.112a.305.305 0 0 1 .112.28c-.013.2-.119.442-.318.728-.187.287-.46.567-.822.84-.361.274-.816.504-1.364.691-.535.174-1.152.261-1.85.261zm-2.054-5.88h4.128v-.056c0-.485-.08-.908-.242-1.269a2.007 2.007 0 0 0-.71-.859c-.312-.211-.685-.317-1.121-.317-.436 0-.81.106-1.121.317a2.007 2.007 0 0 0-.71.859c-.15.36-.224.784-.224 1.27v.055zm-14.528 5.694c-.175 0-.305-.044-.393-.131a1.13 1.13 0 0 1-.224-.336L22.11 8.668a.868.868 0 0 1-.019-.168.38.38 0 0 1 .112-.28.393.393 0 0 1 .28-.131h1.383a.48.48 0 0 1 .355.13c.087.075.137.15.15.225l1.83 6.178L28.144 8.5a.621.621 0 0 1 .168-.262c.087-.1.218-.15.392-.15h.934c.175 0 .306.05.393.15a.62.62 0 0 1 .168.262l1.943 6.122 1.83-6.178a.423.423 0 0 1 .131-.224.48.48 0 0 1 .355-.131h1.383c.112 0 .205.043.28.13.087.075.13.169.13.28a.48.48 0 0 1-.036.169l-2.672 8.66a.669.669 0 0 1-.206.337c-.087.087-.218.13-.392.13h-1.214c-.175 0-.312-.043-.411-.13a.669.669 0 0 1-.206-.336l-1.943-5.899-1.942 5.899a.8.8 0 0 1-.225.336c-.087.087-.224.13-.41.13h-1.196zm-9.138.186c-.997 0-1.838-.174-2.523-.522a3.696 3.696 0 0 1-1.55-1.475c-.349-.635-.548-1.375-.598-2.221a15.119 15.119 0 0 1-.019-.822c0-.323.006-.597.019-.821.05-.859.255-1.6.617-2.221a3.817 3.817 0 0 1 1.569-1.475c.685-.348 1.513-.523 2.484-.523.972 0 1.794.175 2.466.523.685.348 1.208.84 1.57 1.475.373.622.585 1.362.635 2.221.012.224.018.498.018.821 0 .324-.006.598-.018.822-.05.846-.255 1.586-.617 2.221-.348.635-.865 1.126-1.55 1.475-.673.348-1.507.522-2.504.522zm0-1.848c.66 0 1.17-.205 1.531-.616.361-.423.56-1.039.598-1.848.013-.186.019-.429.019-.728 0-.298-.006-.541-.019-.728-.037-.796-.236-1.406-.598-1.829-.36-.423-.872-.635-1.532-.635s-1.17.212-1.532.635c-.36.423-.56 1.033-.597 1.83a10.93 10.93 0 0 0-.019.727c0 .299.006.542.019.728.037.81.236 1.425.597 1.848.362.411.872.616 1.532.616zM.448 17.795a.433.433 0 0 1-.317-.13.432.432 0 0 1-.131-.318V5.195c0-.137.044-.249.13-.336a.433.433 0 0 1 .318-.13h5.007c.972 0 1.818.155 2.54.466.723.299 1.284.76 1.682 1.382.399.61.598 1.375.598 2.296 0 .933-.2 1.704-.598 2.314-.398.598-.959 1.046-1.681 1.344-.723.299-1.57.448-2.54.448H2.67v4.368a.43.43 0 0 1-.13.317.396.396 0 0 1-.318.131H.448zm2.186-6.888h2.728c.722 0 1.276-.168 1.662-.504.386-.348.58-.858.58-1.53 0-.623-.181-1.12-.542-1.494-.361-.386-.928-.578-1.7-.578H2.634v4.106z'
						/>
						<path
							fill='#2240af'
							d='M147.04 6.243 141.381 12l5.659 5.759v1.467h-13.706V17.76l5.66-5.759-5.66-5.757V4.776h13.706v1.467z'
						/>
						<path
							fill='#090923'
							d='M131.654 5.026v13.948h-1.442l-5.657-5.76-5.659 5.76h-1.442V5.026h1.442l5.659 5.76 5.657-5.76h1.442zM147.035 0v2.517h2.492v18.967h-2.492v2.517H152V0h-4.965zm-35.067 24h4.93v-2.517h-2.458V2.517h2.458V0h-4.93v24z'
						/>
					</>
				) : (
					<>
						{' '}
						<path
							d='M95.579 21.342a.358.358 0 01-.261-.112.358.358 0 01-.113-.261v-.15a.825.825 0 01.075-.149l1.457-3.453L93.15 8.76a.856.856 0 01-.074-.261.454.454 0 01.13-.28.354.354 0 01.28-.131H95c.15 0 .261.037.336.112.075.075.13.155.168.243l2.485 6.103 2.559-6.103c.038-.1.094-.18.169-.243.074-.075.186-.112.336-.112h1.494c.1 0 .187.037.262.112a.336.336 0 01.131.261.857.857 0 01-.075.299l-5.287 12.227c-.05.1-.112.18-.187.242-.075.075-.187.112-.336.112h-1.476zM88.13 17.982c-.723 0-1.327-.124-1.813-.373a3.707 3.707 0 01-1.177-.952v.69c0 .125-.043.23-.13.318a.396.396 0 01-.318.13h-1.476a.433.433 0 01-.317-.13.432.432 0 01-.131-.318V4.99c0-.124.043-.23.13-.317a.433.433 0 01.318-.131h1.588c.137 0 .243.044.318.13.087.088.13.194.13.318v4.144c.312-.36.698-.653 1.159-.877.473-.237 1.046-.355 1.718-.355.66 0 1.233.112 1.72.336.485.224.89.541 1.213.952.337.398.592.865.767 1.4.174.535.267 1.114.28 1.736.012.224.018.43.018.616 0 .174-.006.373-.018.597a6.74 6.74 0 01-.3 1.792 4.312 4.312 0 01-.746 1.4c-.324.398-.73.71-1.215.934-.486.211-1.058.317-1.719.317zm-.692-1.997c.536 0 .953-.112 1.252-.336a1.91 1.91 0 00.635-.915c.137-.373.218-.784.243-1.232a8.406 8.406 0 000-1.12 4.243 4.243 0 00-.243-1.232 1.801 1.801 0 00-.635-.896c-.299-.236-.716-.355-1.252-.355-.498 0-.903.112-1.214.336-.311.224-.548.51-.71.859-.162.336-.249.69-.261 1.064a13.123 13.123 0 000 1.437c.024.386.105.766.242 1.139.15.36.38.66.692.896.323.236.74.355 1.251.355zM70.628 17.982c-.647 0-1.22-.106-1.719-.317a3.346 3.346 0 01-1.214-.934 4.31 4.31 0 01-.747-1.4 6.74 6.74 0 01-.299-1.792 10.844 10.844 0 01-.019-.597c0-.187.007-.392.02-.616.024-.622.117-1.2.28-1.736a4.308 4.308 0 01.747-1.4c.336-.41.747-.728 1.232-.952.499-.224 1.072-.336 1.72-.336.672 0 1.239.118 1.7.355.473.224.865.516 1.176.877V4.99a.47.47 0 01.112-.317c.087-.087.2-.131.337-.131h1.588c.124 0 .23.044.317.13.087.088.13.194.13.318v12.357c0 .125-.043.23-.13.318a.433.433 0 01-.317.13h-1.476a.455.455 0 01-.337-.13.471.471 0 01-.112-.318v-.69c-.311.385-.71.703-1.195.952-.474.248-1.071.373-1.794.373zm.692-1.997c.523 0 .94-.119 1.251-.355a2.13 2.13 0 00.691-.896c.15-.373.23-.753.243-1.139a13.123 13.123 0 000-1.437 2.626 2.626 0 00-.261-1.064 2.163 2.163 0 00-.71-.859c-.312-.224-.716-.336-1.215-.336-.523 0-.94.119-1.251.355a1.915 1.915 0 00-.654.896 4.243 4.243 0 00-.243 1.232 16.73 16.73 0 000 1.12c.025.448.106.859.243 1.232s.355.678.654.915c.311.224.728.336 1.252.336zM60.425 17.982c-1.382 0-2.478-.398-3.288-1.194-.81-.797-1.245-1.93-1.307-3.398a4.84 4.84 0 01-.019-.466c0-.2.006-.355.019-.467.05-.933.261-1.742.635-2.427a3.928 3.928 0 011.588-1.568c.672-.373 1.463-.56 2.372-.56 1.01 0 1.856.212 2.541.635.685.41 1.202.99 1.55 1.736.35.734.524 1.587.524 2.557v.392c0 .125-.044.23-.131.318a.455.455 0 01-.336.13H58.37v.15c.013.435.094.84.243 1.213.162.36.393.653.691.877.312.224.68.336 1.103.336.349 0 .641-.05.878-.149a2.39 2.39 0 00.897-.71c.112-.149.199-.236.261-.26a.726.726 0 01.318-.057h1.606c.125 0 .224.038.3.112a.305.305 0 01.111.28c-.012.2-.118.442-.317.728-.187.287-.461.567-.822.84-.361.274-.816.504-1.364.691-.536.174-1.152.261-1.85.261zm-2.055-5.88h4.13v-.056c0-.485-.082-.908-.244-1.269a2.006 2.006 0 00-.71-.859c-.311-.211-.685-.317-1.12-.317-.437 0-.81.106-1.122.317a2.007 2.007 0 00-.71.859c-.149.36-.224.784-.224 1.27v.055zM49.026 17.796a.433.433 0 01-.317-.131.432.432 0 01-.13-.317V8.556c0-.137.043-.25.13-.336a.433.433 0 01.317-.131h1.514c.124 0 .23.043.317.13.1.088.15.2.15.337v.765a2.814 2.814 0 011.102-.915c.46-.211.99-.317 1.588-.317h.766c.137 0 .243.043.318.13.087.088.13.193.13.318V9.88c0 .124-.043.23-.13.317a.396.396 0 01-.318.13h-1.457c-.598 0-1.065.169-1.401.505-.324.336-.486.796-.486 1.381v5.133c0 .125-.044.23-.13.318a.455.455 0 01-.337.13h-1.626zM41.98 17.982c-1.382 0-2.478-.398-3.287-1.194-.81-.797-1.246-1.93-1.308-3.398a4.844 4.844 0 01-.018-.466c0-.2.006-.355.018-.467.05-.933.262-1.742.635-2.427a3.928 3.928 0 011.588-1.568c.673-.373 1.464-.56 2.373-.56 1.009 0 1.856.212 2.54.635.686.41 1.202.99 1.551 1.736.349.734.523 1.587.523 2.557v.392c0 .125-.043.23-.13.318a.455.455 0 01-.337.13h-6.202v.15c.012.435.093.84.243 1.213.162.36.392.653.69.877.312.224.68.336 1.103.336.349 0 .642-.05.878-.149a2.384 2.384 0 00.897-.71c.112-.149.2-.236.261-.26a.726.726 0 01.318-.057h1.607c.124 0 .224.038.299.112a.305.305 0 01.112.28c-.013.2-.119.442-.318.728-.187.287-.46.567-.822.84-.361.274-.816.504-1.364.691-.535.174-1.152.261-1.85.261zm-2.054-5.88h4.128v-.056c0-.485-.08-.908-.242-1.269a2.007 2.007 0 00-.71-.859c-.312-.211-.685-.317-1.121-.317-.436 0-.81.106-1.121.317a2.007 2.007 0 00-.71.859c-.15.36-.224.784-.224 1.27v.055zM25.398 17.796c-.175 0-.305-.044-.393-.131a1.13 1.13 0 01-.224-.336L22.11 8.668a.868.868 0 01-.019-.168.38.38 0 01.112-.28.393.393 0 01.28-.131h1.383a.48.48 0 01.355.13c.087.075.137.15.15.225l1.83 6.178L28.144 8.5a.621.621 0 01.168-.262c.087-.1.218-.15.392-.15h.934c.175 0 .306.05.393.15a.62.62 0 01.168.262l1.943 6.122 1.83-6.178a.423.423 0 01.131-.224.48.48 0 01.355-.131h1.383c.112 0 .205.043.28.13.087.075.13.169.13.28 0 .05-.012.106-.036.169l-2.672 8.66a.669.669 0 01-.206.337c-.087.087-.218.13-.392.13h-1.214c-.175 0-.312-.043-.411-.13a.669.669 0 01-.206-.336l-1.943-5.899-1.942 5.899a.8.8 0 01-.225.336c-.087.087-.224.13-.41.13h-1.196zM16.26 17.982c-.997 0-1.838-.174-2.523-.522a3.696 3.696 0 01-1.55-1.475c-.349-.635-.548-1.375-.598-2.221a15.119 15.119 0 01-.019-.822c0-.323.006-.597.019-.821.05-.859.255-1.6.617-2.221a3.817 3.817 0 011.569-1.475c.685-.348 1.513-.523 2.484-.523.972 0 1.794.175 2.466.523.685.348 1.208.84 1.57 1.475.373.622.585 1.362.635 2.221.012.224.018.498.018.821 0 .324-.006.598-.018.822-.05.846-.255 1.586-.617 2.221-.348.635-.865 1.126-1.55 1.475-.673.348-1.507.522-2.504.522zm0-1.848c.66 0 1.17-.205 1.531-.616.361-.423.56-1.039.598-1.848.013-.186.019-.429.019-.728 0-.298-.006-.541-.019-.728-.037-.796-.236-1.406-.598-1.829-.36-.423-.872-.635-1.532-.635s-1.17.212-1.532.635c-.36.423-.56 1.033-.597 1.83-.013.186-.019.429-.019.727 0 .299.006.542.019.728.037.81.236 1.425.597 1.848.362.411.872.616 1.532.616zM.448 17.795a.433.433 0 01-.317-.13.432.432 0 01-.131-.318V5.195c0-.137.044-.249.13-.336a.433.433 0 01.318-.13h5.007c.972 0 1.818.155 2.54.466.723.299 1.284.76 1.682 1.382.399.61.598 1.375.598 2.296 0 .933-.2 1.704-.598 2.314-.398.598-.959 1.046-1.681 1.344-.723.299-1.57.448-2.54.448H2.67v4.368c0 .125-.043.23-.13.317a.396.396 0 01-.318.131H.448zm2.186-6.888h2.728c.722 0 1.276-.168 1.662-.504.386-.348.58-.858.58-1.53 0-.623-.181-1.12-.542-1.494-.361-.386-.928-.578-1.7-.578H2.634v4.106z'
							fill='#F4F5F9'
						/>
						<path
							d='M147.04 6.243L141.381 12l5.659 5.759v1.467h-13.706V17.76l5.66-5.759-5.66-5.757V4.776h13.706v1.467z'
							fill='#2240AF'
						/>
						<path
							d='M131.654 5.026v13.948h-1.442l-5.657-5.76-5.659 5.76h-1.442V5.026h1.442l5.659 5.76 5.657-5.76h1.442zM147.035 0v2.517h2.492v18.967h-2.492v2.517H152V0h-4.965zm-35.067 24h4.93v-2.517h-2.458V2.517h2.458V0h-4.93v24z'
							fill='#BDD1FF'
						/>
					</>
				)}
			</svg>
		</NextLink>
	)
}