import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save() {
	const blockProps = useBlockProps.save({
		className: 'content-inserter-wrapper wp-block-group is-vertical alignfull'
	});

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
