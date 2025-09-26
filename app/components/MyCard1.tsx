interface MyCardProps {
    title: string;
    description?: string;
    cardClassName?: string;
    titleClassName?: string;
  }
  
  const MyCard1 = ({ title, description, cardClassName, titleClassName }: MyCardProps) => {
      return (      
        <div className={cardClassName}>
          <div className="card-body">
            <h5 className={titleClassName}>{title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <p className="card-text">{description}</p>
          </div>
        </div>
      );
    };
    
    export default MyCard1;