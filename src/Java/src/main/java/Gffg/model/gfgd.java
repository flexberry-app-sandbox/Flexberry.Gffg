package Gffg.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Gffg.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: gfgd
 */
@Entity(name = "IISGffggfgd")
@Table(schema = "public", name = "gfgd")
public class gfgd {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "time")
    private Date time;

    @Column(name = "hg")
    private Integer hg;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zapis")
    @Convert("Zapis")
    @Column(name = "Запись", length = 16, unique = true, nullable = false)
    private UUID _zapisid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zapis", insertable = false, updatable = false)
    private Zapis zapis;


    public gfgd() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date gettime() {
      return time;
    }

    public void settime(Date time) {
      this.time = time;
    }

    public Integer gethg() {
      return hg;
    }

    public void sethg(Integer hg) {
      this.hg = hg;
    }


}