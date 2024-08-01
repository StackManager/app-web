import { ValidateRequired } from "@Commons/validator/required.validator";
import { ValidateMaxLength } from "@Commons/validator/length.max.validator";
import { ValidateMinLength } from "@Commons/validator/length.min.validator";
import { ValidateRegex } from "@Commons/validator/regex.validator";
import { alphanumericAndSpacesRegex, htmlCharactersRegex } from "@Commons/constants/regex";
import { DataBase } from "@Commons/crud/crud.data.base";
import { generateSlug } from "@Commons/format/string";
import { ValidateObjectId } from "@Commons/validator/object.id.validator";

export class WebComponentsData extends DataBase {

  protected nameId: string = "WebComponents";
  name: string = '';
  description?: string = '';
  deleted: boolean = false;
  slug?: string = '';
  tags?: string[] = [];

  // Getter y Setter para 'name'
  getName(): string {
    return this.name;
  }

  setName(value: any): void {
    ValidateRequired.validateOrFail({ value, name: 'name' });
    ValidateMaxLength.validateOrFail({ value, maxLength: 100, name: 'name' });
    ValidateMinLength.validateOrFail({ value, minLength: 3, name: 'name' });
    ValidateRegex.validateOrFail({ value, name: 'name', regex: alphanumericAndSpacesRegex });
    this.name = value;
  }

  // Getter y Setter para 'description'
  getDescription(): string | undefined {
    return this.description;
  }

  setDescription(value: any): void {
    if (value === undefined) return;
    ValidateMaxLength.validateOrFail({ value, maxLength: 255, name: 'description' });
    ValidateRegex.validateOrFail({ value, name: 'description', regex: alphanumericAndSpacesRegex });
    this.description = value;
  }

  // Getter y Setter para 'slug'
  getSlug(): string | undefined {
    if (this.slug === undefined) {
      this.slug = generateSlug(this.name);
    }
    return this.slug;
  }

  setSlug(value: any): void {
    this.slug = generateSlug(value);
  }

  // Getter y Setter para 'tags'
  getTags(): string[] | undefined {
    return this.tags;
  }

  setTags(value: any[]): void {
    if (!Array.isArray(value)) return;
    this.tags = value;
  }

}