import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Latest Works</span>
              {/* <h2>
                Explore My Popular <span>Projects</span>
              </h2> */}
              <h2>Real-World <span>Projects</span> I've Designed and Delivered</h2>

            </div>
          </div>
        </div>
      <div className="row align-items-center pb-25">
  <div className="col-lg-6">
    <div className="project-image wow fadeInLeft delay-0-2s">
      <img src="assets/images/projects/project_3.png" alt="Project" />
    </div>
  </div>
  <div className="col-xl-5 col-lg-6">
    <div className="project-content wow fadeInRight delay-0-2s">
      <span className="sub-title">Healthcare DataOps & Security Pipeline</span>
      <h2>
        <Link legacyBehavior href="project-details">
          HIPAA-Compliant CI/CD on AWS EKS
        </Link>
      </h2>
      <p>
        Architected a secure GitHub Actions pipeline for EDI validation, container deployment, Vault-based secrets, and Prometheus alerts. Enabled traceable, zero-touch deployments in healthcare environments.
      </p>
      {/* <Link legacyBehavior href="/project-details">
        <a className="details-btn">
          <i className="far fa-arrow-right" />
        </a>
      </Link> */}
    </div>
  </div>
</div>
<div className="row align-items-center pb-25">
  <div className="col-lg-6 order-lg-2">
    <div className="project-image wow fadeInLeft delay-0-2s">
      <img src="assets/images/projects/project_2.png" alt="Project" />
    </div>
  </div>
  <div className="col-xl-5 col-lg-6 ms-auto">
    <div className="project-content wow fadeInRight delay-0-2s">
      <span className="sub-title">XR Streaming Infrastructure</span>
      <h2>
        <Link legacyBehavior href="project-details">
          Multi-Cloud GKE + AKS with Terraform
        </Link>
      </h2>
      <p>
        Deployed scalable XR infrastructure across Azure and GCP using Terraform, GitLab CI/CD, Helm charts, and Trivy scanning. Enabled dynamic scaling and zero-downtime content delivery.
      </p>
      {/* <Link legacyBehavior href="/project-details">
        <a className="details-btn">
          <i className="far fa-arrow-right" />
        </a>
      </Link> */}
    </div>
  </div>
</div>

      <div className="row align-items-center pb-25">
  <div className="col-lg-6">
    <div className="project-image wow fadeInLeft delay-0-2s">
      <img src="assets/images/projects/project_1.png" alt="Project" />
    </div>
  </div>
  <div className="col-xl-5 col-lg-6">
    <div className="project-content wow fadeInRight delay-0-2s">
      <span className="sub-title">EDI 834/837 File Validator</span>
      <h2>
        <Link legacyBehavior href="project-details">
          Python + Jenkins Integration
        </Link>
      </h2>
      <p>
        Built a Python-based EDI validation engine integrated with Jenkins CI/CD. Helped detect data anomalies early, reducing insurance claim rejections by over 30%.
      </p>
      {/* <Link legacyBehavior href="/project-details">
        <a className="details-btn">
          <i className="far fa-arrow-right" />
        </a>
      </Link> */}
    </div>
  </div>
</div>
<div className="row align-items-center pb-25">
  <div className="col-lg-6 order-lg-2">
    <div className="project-image wow fadeInLeft delay-0-2s">
      <img src="assets/images/projects/project_4.png" alt="Project" />
    </div>
  </div>
  <div className="col-xl-5 col-lg-6 ms-auto">
    <div className="project-content wow fadeInRight delay-0-2s">
      <span className="sub-title">MySQL HA for Production Workloads</span>
      <h2>
        <Link legacyBehavior href="project-details">
          Multi-AZ Replication + Failover
        </Link>
      </h2>
      <p>
        Designed and implemented a fault-tolerant MySQL architecture with replication, backup automation, and zone-level failover. Ensured zero data loss and high availability during load tests.
      </p>
      {/* <Link legacyBehavior href="/project-details">
        <a className="details-btn">
          <i className="far fa-arrow-right" />
        </a>
      </Link> */}
    </div>
  </div>
</div>
        {/* <div className="project-btn text-center wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="/projects">
            <a className="theme-btn">
              View More Projects <i className="far fa-angle-right" />
            </a>
          </Link>
        </div> */}
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default Projects;

export const Projects2 = () => {
  return (
    <section
      id="projects"
      className="projects-area-four pt-135 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" /> Explore my projects
              </span>
              <h2>Explore My Projects</h2>
            </div>
          </div>
        </div>
        <div className="row gap-50">
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two1.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two2.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two3.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two4.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-md-3">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two5.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="project-details-btn mb-50">
              <Link legacyBehavior href="/project-details">
                <a className="more-btn wow zoomIn delay-0-2s">
                  <span>More</span>
                  <i className="fal fa-arrow-up" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
