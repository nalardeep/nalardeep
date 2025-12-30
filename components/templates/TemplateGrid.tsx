import { Template } from '@/lib/templates';
import TemplateCard from './TemplateCard';

export default function TemplateGrid({ templates }: { templates: Template[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
                <TemplateCard key={template.slug} template={template} />
            ))}
        </div>
    );
}
