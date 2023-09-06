type StylesSelectionProps = {
  textColor?: string | null;
  backgroundColor?: string | null;
};

export class StylesSelection {
  private textColor: string;
  private backgroundColor: string;
  private defaultColor: string = "#494949";
  private defaultBackgroundColor: string = "#ffffff";

  constructor({ backgroundColor, textColor }: StylesSelectionProps) {
    this.textColor = textColor ? textColor : this.defaultColor;
    this.backgroundColor = backgroundColor
      ? backgroundColor
      : this.defaultBackgroundColor;
  }

  get styles(): { color: string; backgroundColor: string } {
    return {
      color: this.textColor,
      backgroundColor: this.backgroundColor,
    };
  }
}
