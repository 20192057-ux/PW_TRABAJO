const TeamMember = (props : TeamMemberProps) => {
    return (
        <div className="col-md-3 text-center">
            <img
                src={props.src}
                alt={props.alt || props.name}
                className="rounded-circle mb-2"
                style={{ width: props.size, height: props.size, objectFit: 'cover' }}
            />
            <p>{props.name}</p>
        </div>
    )
}

type TeamMemberProps = {
  name: string
  src: string
  alt?: string
  size?: number
}

export default TeamMember
