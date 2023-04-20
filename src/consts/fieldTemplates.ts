import Fields from '@/consts/fields';
import { IFieldTemplates } from '@/lib/interfaces/fieldTemplate';

export const fieldTemplates: IFieldTemplates = {
    [Fields.Input]: { label: '', type: '' },
    [Fields.Select]: { label: '', options: [] },
    [Fields.Checkbox]: { label: '' },
}