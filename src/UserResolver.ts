import {
  Resolver,
  Query,
  Mutation,
  Arg,
  ObjectType,
  Field,
} from "type-graphql";
import { User } from "./entity/User";
import { validateEmail } from "./middleware/validateEmail";

@ObjectType()
class UserResponse {
  @Field()
  success: boolean;
  @Field(() => User)
  user: User;
}

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users() {
    return User.find();
  }

  @Query(() => User)
  user(@Arg("id") id: number) {
    return User.findOne(id);
  }

  @Mutation(() => UserResponse)
  async createUser(
    @Arg("fullname") fullname: string,
    @Arg("email") email: string
  ): Promise<UserResponse> {
    if (!validateEmail(email)) {
      throw new Error("Invalid email");
    } else if (!fullname.trim()) {
      throw new Error("Name cannot be empty");
    }
    try {
      let user = await User.create({ email, fullname }).save();
      console.log(user);
      return {
        user,
        success: true,
      };
    } catch (error) {
      console.error(error);
      throw new Error(error.detail);
    }
  }

  @Mutation(() => Boolean)
  async removeUser(@Arg("id") id: number): Promise<Boolean> {
    try {
      await User.delete(id);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
