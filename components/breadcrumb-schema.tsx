type BreadcrumbItem = {
    name: string;
    url: string;
};

type BreadcrumbSchemaProps = {
    items: BreadcrumbItem[];
};

/**
 * Reusable component to inject BreadcrumbList JSON-LD structured data.
 * Place this component at the top level of any page component.
 */
const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default BreadcrumbSchema;
