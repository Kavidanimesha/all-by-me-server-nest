import { ObjectId } from 'mongoose';
import { CreateAdvertisementDto } from 'src/advertisement/dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from 'src/advertisement/dto/update-advertisement.dto';
import { AdvertisementEntity } from 'src/advertisement/entities/advertisement.entity';

export interface AdvertisementServiceInterface {
  /**
   * Returns created advertisement
   * @param {CreateAdvertisementDto} createAdvertisementDto
   * @returns {Promise<AdvertisementEntity>}
   */
  create(
    createAdvertisementDto: CreateAdvertisementDto,
  ): Promise<AdvertisementEntity>;

  /**
   * Returns all advertisements
   * @returns {Promise<AdvertisementEntity[]>}
   */
  findAll(): Promise<AdvertisementEntity[]>;

  /**
   * Returns found advertisement by ID
   * @returns {Promise<AdvertisementEntity>}
   */
  findOne(id: string | ObjectId): Promise<AdvertisementEntity>;

  /**
   * Returns updated advertisement
   * @returns {Promise<AdvertisementEntity>}
   */
  update(
    updateAdvertisementDto: UpdateAdvertisementDto,
  ): Promise<AdvertisementEntity>;

  /**
   * Returns removed advertisement
   * @returns {Promise<AdvertisementEntity>}
   */
  remove(id: string | ObjectId): Promise<AdvertisementEntity>;
}
