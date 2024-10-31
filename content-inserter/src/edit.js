import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './editor.scss';

// Define which blocks can be inserted
const ALLOWED_BLOCKS = [
	'core/paragraph',
	'core/heading',
	'core/image'
	// Add more allowed blocks as needed
];


export default function Edit() {
	const blockProps = useBlockProps({
		className: 'content-inserter-wrapper wp-block-group is-vertical alignfull'
	});

	return (
		<div { ...blockProps }>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				renderAppender={ InnerBlocks.ButtonBlockAppender }
				orientation="vertical"
			/>
		</div>
	);
}
