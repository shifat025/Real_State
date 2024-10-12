export default function Button({text,href,class: className,target = "_self"}){
    return(
      <a target={target} href={href} className={className}>{text}</a>
    )
  }
  