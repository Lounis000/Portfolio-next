import { Col } from "react-bootstrap";
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ id, title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Link href={`/projects/${id}`} passHref>
        <div className="proj-imgbx">
          <Image src={imgUrl} alt={title} layout="responsive" width={300} height={200} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Link>
    </Col>
  )
}

export default ProjectCard;
